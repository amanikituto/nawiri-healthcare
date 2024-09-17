import React from 'react';
import practice from '../../assets/Female doctor consultation in the.jpeg';
import './ProviderDashboard.css';


function PracticeManagement() {
  return (
    <div className="card practice-management">
      <h2 className="card__title">Practice Management</h2>
      <img className='practice' src={practice} alt='practice'/>
      <p className="card__subtitle">
        Streamline appointment scheduling, patient communication, billing, and EMR management.
      </p>
      <p className='features'>Features</p>
      <ul className="card__form">
        <li>Appointment Scheduling</li>
        <li>Patient Communication</li>
        <li>Billing</li>
        <li>EMR Management</li>
      </ul>
    </div>
  );
}

export default PracticeManagement;
