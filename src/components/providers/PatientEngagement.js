import React, { useState } from 'react';
import './ProviderDashboard.css';
import Navbar from '../layout/Navbar';

const PatientEngagement = () => {
  const [patientProfile, setPatientProfile] = useState(null);
  const [healthMonitoring, setHealthMonitoring] = useState(null);
  const [riskAssessment, setRiskAssessment] = useState(null);

  // Simulated function to get Unified Patient Profile data
  const fetchPatientProfile = () => {
    const profile = {
      name: 'John Doe',
      age: 45,
      medicalHistory: ['Hypertension', 'Asthma'],
      ongoingTreatments: ['Blood Pressure Medication', 'Inhaler'],
      allergies: ['Penicillin'],
      pastConsultations: ['2023-01-12: General Checkup', '2023-06-24: Respiratory Exam'],
    };
    setPatientProfile(profile);
  };

  // Simulated function to get Dynamic Health Monitoring data
  const fetchHealthMonitoring = () => {
    const monitoring = {
      heartRate: 88, // bpm
      bloodPressure: '120/80', // mmHg
      oxygenSaturation: '98%', // SpO2
      abnormalReadings: false,
    };
    setHealthMonitoring(monitoring);
  };

  // Simulated function to get AI-Powered Health Risk Assessment
  const fetchRiskAssessment = () => {
    const risk = {
      highRiskConditions: ['Heart Disease', 'Stroke'],
      suggestedActions: ['Reduce salt intake', 'Increase exercise', 'Regular heart checkups'],
    };
    setRiskAssessment(risk);
  };

  return (
    <div>
      <Navbar />
      <h1>Patient Engagement</h1>

      <div className="section">
        <h2>Unified Patient Profile</h2>
        <button onClick={fetchPatientProfile}>View Patient Profile</button>
        {patientProfile && (
          <div className="profile-info">
            <h3>Name: {patientProfile.name}</h3>
            <p>Age: {patientProfile.age}</p>
            <p>Medical History: {patientProfile.medicalHistory.join(', ')}</p>
            <p>Ongoing Treatments: {patientProfile.ongoingTreatments.join(', ')}</p>
            <p>Allergies: {patientProfile.allergies.join(', ')}</p>
            <p>Past Consultations:</p>
            <ul>
              {patientProfile.pastConsultations.map((consultation, index) => (
                <li key={index}>{consultation}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="section">
        <h2>Dynamic Health Monitoring</h2>
        <button onClick={fetchHealthMonitoring}>Monitor Health</button>
        {healthMonitoring && (
          <div className={`monitoring-info ${healthMonitoring.abnormalReadings ? 'alert' : ''}`}>
            <p>Heart Rate: {healthMonitoring.heartRate} bpm</p>
            <p>Blood Pressure: {healthMonitoring.bloodPressure} mmHg</p>
            <p>Oxygen Saturation: {healthMonitoring.oxygenSaturation}</p>
            {healthMonitoring.abnormalReadings ? (
              <p className="alert-text">Alert: Abnormal readings detected!</p>
            ) : (
              <p>All readings are normal.</p>
            )}
          </div>
        )}
      </div>

      <div className="section">
        <h2>AI-Powered Health Risk Assessment</h2>
        <button onClick={fetchRiskAssessment}>Get Risk Assessment</button>
        {riskAssessment && (
          <div className="risk-assessment-info">
            <h3>High-Risk Conditions</h3>
            <ul>
              {riskAssessment.highRiskConditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
            <h3>Suggested Actions</h3>
            <ul>
              {riskAssessment.suggestedActions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientEngagement;
