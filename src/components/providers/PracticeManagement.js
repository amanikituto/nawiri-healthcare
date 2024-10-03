import React, { useState } from 'react';
import './ProviderDashboard.css';
import Navbar from '../layout/Navbar';

function PracticeManagement() {
  const [activeTab, setActiveTab] = useState('appointments');

  const renderContent = () => {
    switch (activeTab) {
      case 'appointments':
        return (
          <div>
            <h2>Appointment Schedules Management</h2>
            {/* Appointment management UI goes here */}
            <p>Manage patient appointments, reschedule, or cancel bookings.</p>
          </div>
        );
      case 'communication':
        return (
          <div>
            <h2>Patient Communication</h2>
            {/* Communication module UI goes here */}
            <p>Chat with patients, send reminders or updates, and review messages.</p>
          </div>
        );
      case 'billing':
        return (
          <div>
            <h2>Billing Management</h2>
            {/* Billing management UI goes here */}
            <p>Manage invoices, payments, and patient balances.</p>
          </div>
        );
      case 'emr':
        return (
          <div>
            <h2>EMR Management</h2>
            {/* EMR management UI goes here */}
            <p>View and update patient medical records and history.</p>
          </div>
        );
      default:
        return <div>Select a tab to manage practice features.</div>;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1>Practice Management</h1>

        <div className="tabs">
          <button onClick={() => setActiveTab('appointments')}>Appointments</button>
          <button onClick={() => setActiveTab('communication')}>Patient Communication</button>
          <button onClick={() => setActiveTab('billing')}>Billing</button>
          <button onClick={() => setActiveTab('emr')}>EMR Management</button>
        </div>

        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default PracticeManagement;
