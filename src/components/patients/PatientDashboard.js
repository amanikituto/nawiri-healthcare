import React, { useState } from 'react';
import AppointmentBooking from './AppointmentBooking';
import Telemedicine from './Telemedicine';
import MedicalRecords from './MedicalRecords';
import HealthDashboard from './HealthDashboard';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import RafikiChatbot from './RafikiChatbot'; // Import the chatbot component
import './PatientDashboard.css'; // Add a CSS file for styling

const PatientDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('AppointmentBooking'); // Toggle state

  return (
    <div className="patient-dashboard">
      <Navbar />
      <HealthDashboard />
      <div className="dashboard-columns">
        <div className="column medical-records-column">
          <MedicalRecords />
        </div>

        <div className="column toggle-column">
          <div className="toggle-heading">
            <button
              className={activeComponent === 'AppointmentBooking' ? 'active' : ''}
              onClick={() => setActiveComponent('AppointmentBooking')}
            >
              Appointment Booking
            </button>
            <button
              className={activeComponent === 'Telemedicine' ? 'active' : ''}
              onClick={() => setActiveComponent('Telemedicine')}
            >
              Telemedicine
            </button>
          </div>

          <div className="toggle-box">
            {activeComponent === 'AppointmentBooking' && <AppointmentBooking />}
            {activeComponent === 'Telemedicine' && <Telemedicine />}
          </div>
        </div>
      </div>

      {/* Add the chatbot at the bottom or wherever appropriate */}
      <RafikiChatbot />

      <Footer />
    </div>
  );
};

export default PatientDashboard;
