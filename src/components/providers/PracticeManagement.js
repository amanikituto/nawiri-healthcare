import React from 'react';
import practice from '../../assets/Female doctor consultation in the.jpeg';
import './ProviderDashboard.css';
import Navbar from '../layout/Navbar';
import DoctorPatients from './DoctorPatients'; // Import the DoctorPatients component

function PracticeManagement() {
  const doctorId = 1; // Example doctor ID, this could come from props or URL params

  return (
    <div>
      <Navbar />
      <h1>Practice Management</h1>
    

      {/* Render the DoctorPatients component */}
      <DoctorPatients doctorId={doctorId} />
    </div>
  );
}

export default PracticeManagement;
