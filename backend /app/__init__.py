from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///nawiri.db'
    app.config['JWT_SECRET_KEY'] = 'your-secret-key'  # Change this!

    db.init_app(app)
    jwt.init_app(app)
    CORS(app, resources={r"/*": {"origins": "http://localhost:5000"}})

    from .routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
