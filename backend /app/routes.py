from flask import Blueprint, request, jsonify
from .models import User, Appointment, MedicalRecord, db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import cross_origin
from datetime import datetime, timedelta
from flask_jwt_extended import get_jti

token_blacklist = set()


main = Blueprint('main', __name__)

@main.route('/register', methods=['POST'])
@cross_origin()
def register():
    data = request.get_json()
    if User.query.filter_by(name=data['name']).first():
        return jsonify({'message': 'Name already taken'}), 400
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Email already registered'}), 400
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    new_user = User(name=data['name'], email=data['email'], password=hashed_password, role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    token = create_access_token(identity=new_user.id)
    return jsonify({
        'id': new_user.id,
        'name': new_user.name,
        'email': new_user.email,
        'role': new_user.role,
        'token': token
    }), 201


@main.route('/login', methods=['POST'])
@cross_origin()
def login():
    data = request.get_json()
    user = User.query.filter_by(name=data['name']).first()
    if user and check_password_hash(user.password, data['password']):
        token = create_access_token(identity=user.id)
        return jsonify({
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'role': user.role,
            'token': token
        }), 200
    return jsonify({'message': 'Invalid credentials'}), 401


@main.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()["jti"]
    token_blacklist.add(jti)
    return jsonify({"message": "Successfully logged out"}), 200

@main.route('/appointments', methods=['GET'])
@jwt_required()
def get_appointments():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user.role == 'patient':
        appointments = Appointment.query.filter_by(patient_id=user_id).all()
    elif user.role == 'provider':
        appointments = Appointment.query.filter_by(doctor_id=user_id).all()
    else:
        return jsonify({'message': 'Unauthorized'}), 403
    return jsonify([{
        'id': appt.id,
        'date': appt.date.isoformat(),
        'description': appt.description
    } for appt in appointments]), 200

@main.route('/appointments', methods=['POST'])
@jwt_required()
def create_appointment():
    user_id = get_jwt_identity()
    data = request.get_json()
    new_appointment = Appointment(
        patient_id=user_id if User.query.get(user_id).role == 'patient' else data['patient_id'],
        doctor_id=user_id if User.query.get(user_id).role == 'provider' else data['doctor_id'],
        date=datetime.fromisoformat(data['date']),
        description=data['description']
    )
    db.session.add(new_appointment)
    db.session.commit()
    return jsonify({'message': 'Appointment created successfully'}), 201

@main.route('/medical-records', methods=['GET'])
@jwt_required()
def get_medical_records():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user.role == 'patient':
        records = MedicalRecord.query.filter_by(patient_id=user_id).all()
    elif user.role == 'provider':
        records = MedicalRecord.query.filter_by(doctor_id=user_id).all()
    else:
        return jsonify({'message': 'Unauthorized'}), 403
    return jsonify([{
        'id': record.id,
        'date': record.date.isoformat(),
        'record': record.record
    } for record in records]), 200

@main.route('/medical-records', methods=['POST'])
@jwt_required()
def create_medical_record():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user.role != 'provider':
        return jsonify({'message': 'Unauthorized'}), 403
    data = request.get_json()
    new_record = MedicalRecord(
        patient_id=data['patient_id'],
        doctor_id=user_id,
        record=data['record']
    )
    db.session.add(new_record)
    db.session.commit()
    return jsonify({'message': 'Medical record created successfully'}), 201

@main.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({
        'id': user.id,
        'email': user.email,
        'role': user.role
    }), 200

@main.route('/user', methods=['PUT'])
@jwt_required()
def update_user():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    data = request.get_json()
    if 'email' in data:
        user.email = data['email']
    if 'password' in data:
        user.password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    db.session.commit()
    return jsonify({'message': 'User updated successfully'}), 200
