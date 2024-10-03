import React, { useState } from 'react';
import './ProviderDashboard.css';
import Navbar from '../layout/Navbar';

const AIDiagnosisSupport = () => {
  // State to hold patient input data and AI-generated insights
  const [patientData, setPatientData] = useState({
    symptoms: '',
    history: '',
  });
  const [aiInsights, setAIInsights] = useState([]);

  // Simulated AI-generated insights (replace with real API later)
  const mockAIResponse = () => {
    return [
      { diagnosis: 'Flu', treatment: 'Rest and fluids' },
      { diagnosis: 'Migraine', treatment: 'Pain relief medication' },
    ];
  };

  const handleInputChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleGenerateInsights = () => {
    const insights = mockAIResponse();
    setAIInsights(insights);
  };

  return (


    <div className="ai-diagnosis-support">

<Navbar />

      <h2>AI-Assisted Diagnosis Support</h2>
      
      <div className="form-section">
        <h3>Enter Patient Data</h3>
        <input 
          type="text" 
          name="symptoms" 
          placeholder="Symptoms" 
          value={patientData.symptoms} 
          onChange={handleInputChange} 
        />
        <textarea 
          name="history" 
          placeholder="Medical History" 
          value={patientData.history} 
          onChange={handleInputChange} 
        />
        <button onClick={handleGenerateInsights}>Generate AI Insights</button>
      </div>
      
      <div className="insights-section">
        <h3>AI-Generated Insights</h3>
        {aiInsights.length > 0 ? (
          <ul>
            {aiInsights.map((insight, index) => (
              <li key={index}>
                <strong>Diagnosis:</strong> {insight.diagnosis} <br />
                <strong>Treatment:</strong> {insight.treatment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No insights generated yet.</p>
        )}
      </div>
    </div>
  );
};

export default AIDiagnosisSupport;
