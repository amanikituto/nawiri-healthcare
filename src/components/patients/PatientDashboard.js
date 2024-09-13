import React from 'react';
import AppointmentBooking from './AppointmentBooking';
import Telemedicine from './Telemedicine';
import MedicalRecords from './MedicalRecords';
import HealthDashboard from './HealthDashboard';

const PatientDashboard = () => {
  return (
    <div>
      <h1>Patient Dashboard</h1>
      <AppointmentBooking />
      <Telemedicine />
      <MedicalRecords />
      <HealthDashboard />
    </div>
  );
};

export default PatientDashboard;
