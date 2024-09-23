import React, { useEffect, useState } from 'react';
import { getPatientEMR } from '../../services/api'; // Import the mock EMR API
import './DoctorPatients.css';

const PatientEMR = ({ patientId }) => {
    const [emrData, setEmrData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (patientId) {
        getPatientEMR(patientId).then((data) => {
          setEmrData(data);
          setLoading(false);
        });
      }
    }, [patientId]);
  
    if (loading) {
      return <p>Loading EMR data...</p>;
    }
  
    return (
      <div className="emr-container">
        <h2>EMR for {emrData.name}</h2>
        <div className="emr-section">
          <h3>Medical History</h3>
          <ul>
            {emrData.medicalHistory.map((entry, index) => (
              <li key={index}>
                <strong>Date:</strong> {entry.date}, 
                <strong> Diagnosis:</strong> {entry.diagnosis}, 
                <strong> Treatment:</strong> {entry.treatment}
              </li>
            ))}
          </ul>
        </div>
        <div className="emr-section">
          <h3>Medications</h3>
          <ul>
            {emrData.medications.map((med, index) => (
              <li key={index}>
                <strong>{med.name}:</strong> {med.dosage}, {med.frequency}
              </li>
            ))}
          </ul>
        </div>
        <div className="emr-section">
          <h3>Allergies</h3>
          <ul>
            {emrData.allergies.map((allergy, index) => (
              <li key={index}>{allergy}</li>
            ))}
          </ul>
        </div>
        <div className="emr-section">
          <h3>Lab Results</h3>
          <ul>
            {emrData.labResults.map((result, index) => (
              <li key={index}>
                <strong>{result.test}:</strong> {result.result} on {result.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="emr-section">
          <h3>Last Visit</h3>
          <p>{emrData.lastVisit}</p>
        </div>
      </div>
    );
  };

  export default PatientEMR;