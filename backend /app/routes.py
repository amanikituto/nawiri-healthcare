from flask import Blueprint, request, jsonify
from .models import User, Appointment, MedicalRecord, db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import cross_origin

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return jsonify({'message': 'Welcome to Nawiri Healthcare'})

# Register a user
@main.route('/register', methods=['POST'])
@cross_origin()
def register():
    data = request.get_json()
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify({'message': 'Email already registered'}), 400
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    new_user = User(email=data['email'], password=hashed_password, role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201



# Login and generate a JWT token
@main.route('/login', methods=['POST'])
@cross_origin()
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    
    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401

    token = create_access_token(identity={'id': user.id, 'email': user.email, 'role': user.role})
    return jsonify({'token': token})



# Get all appointments for the logged-in user (patient or provider)
@main.route('/appointments', methods=['GET'])
@jwt_required()
def get_appointments():
    user_data = get_jwt_identity()
    role = user_data['role']
    
    if role == 'patient':
        appointments = Appointment.query.filter_by(patient_id=user_data['id']).all()
    elif role == 'provider':
        appointments = Appointment.query.filter_by(doctor_id=user_data['id']).all()
    else:
        return jsonify({'message': 'Unauthorized'}), 403
    
    result = [
        {'id': appt.id, 'date': appt.date, 'description': appt.description}
        for appt in appointments
    ]
    
    return jsonify(result)

# Create an appointment
@main.route('/appointments', methods=['POST'])
@jwt_required()
def create_appointment():
    user_data = get_jwt_identity()
    data = request.get_json()
    
    new_appointment = Appointment(
        patient_id=user_data['id'],
        doctor_id=data['doctor_id'],
        description=data['description']
    )
    db.session.add(new_appointment)
    db.session.commit()

    return jsonify({'message': 'Appointment created successfully'}), 201

# Get medical records
@main.route('/medical-records', methods=['GET'])
@jwt_required()
def get_medical_records():
    user_data = get_jwt_identity()
    records = MedicalRecord.query.filter_by(patient_id=user_data['id']).all()
    
    result = [
        {'id': record.id, 'date': record.date, 'record': record.record}
        for record in records
    ]

    return jsonify(result)

# Create medical record (for providers)
@main.route('/medical-records', methods=['POST'])
@jwt_required()
def create_medical_record():
    user_data = get_jwt_identity()
    
    if user_data['role'] != 'provider':
        return jsonify({'message': 'Unauthorized'}), 403

    data = request.get_json()
    new_record = MedicalRecord(
        patient_id=data['patient_id'],
        doctor_id=user_data['id'],
        record=data['record']
    )
    db.session.add(new_record)
    db.session.commit()

    return jsonify({'message': 'Medical record created successfully'}), 201
