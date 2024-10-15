from app import create_app, db
from app.models import User, Appointment, MedicalRecord

app = create_app()

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=5000)
