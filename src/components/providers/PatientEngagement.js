import React from 'react';
import patient from '../../assets/Tips on Improving Patient Education as a Nurse.jpeg';
import './ProviderDashboard.css';

function PatientEngagement() {
  return (
    <div className="card patient-engagement">
      <h2 className="card__title">Patient Engagement</h2>
      <img className='patient' src={patient} alt='patient'/>
      <p className="card__subtitle">
        Enhance patient communication through secure messaging, appointment reminders, and educational resources.
      </p>
      <p className='features'>Features</p>
      <ul className="card__form">
        <li>Secure Messaging</li>
        <li>Appointment Reminders</li>
        <li>Educational Resources</li>
      </ul>
    </div>
  );
}

export default PatientEngagement;
