import React, { useState } from 'react';
import './ProviderDashboard.css';
import Navbar from '../layout/Navbar';

function DataAnalytics() {
  const [diagnosisData, setDiagnosisData] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);

  // Simulated function to get AI diagnosis insights
  const fetchDiagnosisSupport = () => {
    // Mock AI API call for demonstration
    const aiDiagnosis = {
      patientName: 'John Doe',
      potentialDiagnoses: ['Flu', 'Common Cold', 'COVID-19'],
      suggestedTreatments: ['Rest', 'Hydration', 'Antiviral Medication'],
    };
    setDiagnosisData(aiDiagnosis);
  };

  // Simulated function to get Clinical Data Analytics
  const fetchAnalyticsData = () => {
    // Mock data for analytics
    const analytics = {
      commonConditions: ['Hypertension', 'Diabetes', 'Asthma'],
      trendingCases: { Flu: 120, COVID: 45, 'Common Cold': 300 },
      resourceShortages: { beds: 12, ventilators: 2, staff: 5 },
    };
    setAnalyticsData(analytics);
  };

  return (
    <div>
      <Navbar />
      <h1>Data Analytics</h1>

      <div className="section">
        <h2>AI-Assisted Diagnosis Support</h2>
        <button onClick={fetchDiagnosisSupport}>Get Diagnosis Support</button>
        {diagnosisData && (
          <div className="diagnosis-info">
            <h3>Patient: {diagnosisData.patientName}</h3>
            <p>Potential Diagnoses: {diagnosisData.potentialDiagnoses.join(', ')}</p>
            <p>Suggested Treatments: {diagnosisData.suggestedTreatments.join(', ')}</p>
          </div>
        )}
      </div>

      <div className="section">
        <h2>Clinical Data Analytics</h2>
        <button onClick={fetchAnalyticsData}>View Clinical Analytics</button>
        {analyticsData && (
          <div className="analytics-info">
            <h3>Common Conditions</h3>
            <ul>
              {analyticsData.commonConditions.map((condition, index) => (
                <li key={index}>{condition}</li>
              ))}
            </ul>
            <h3>Trending Cases</h3>
            <ul>
              {Object.entries(analyticsData.trendingCases).map(([condition, cases], index) => (
                <li key={index}>
                  {condition}: {cases} cases
                </li>
              ))}
            </ul>
            <h3>Resource Shortages</h3>
            <ul>
              {Object.entries(analyticsData.resourceShortages).map(([resource, shortage], index) => (
                <li key={index}>
                  {resource}: {shortage} remaining
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DataAnalytics;
