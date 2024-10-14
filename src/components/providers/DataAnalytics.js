
import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './ProviderDashboard.css';
import Navbar from '../layout/Navbar';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);



const ClinicalAnalyticsDashboard = () => {
  // Mock data for common conditions and resource trends
  const [commonConditions, setCommonConditions] = useState([]);
  const [resourceTrends, setResourceTrends] = useState([]);

  useEffect(() => {
    // Simulate fetching data from backend
    const mockCommonConditions = [
      { condition: 'Hypertension', count: 50 },
      { condition: 'Diabetes', count: 30 },
      { condition: 'Asthma', count: 20 },
    ];

    const mockResourceTrends = [
      { year: 2024, month: 1, totalResources: 100 },
      { year: 2024, month: 2, totalResources: 80 },
      { year: 2024, month: 3, totalResources: 120 },
    ];

    setCommonConditions(mockCommonConditions);
    setResourceTrends(mockResourceTrends);
  }, []);

  const conditionData = {
    labels: commonConditions.map(c => c.condition),
    datasets: [
      {
        label: 'Occurrences',
        data: commonConditions.map(c => c.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const trendData = {
    labels: resourceTrends.map(t => `${t.year}-${t.month}`),
    datasets: [
      {
        label: 'Total Resources Used',
        data: resourceTrends.map(t => t.totalResources),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="dashboard">

<Navbar />
      <h2>Clinical Data Analytics</h2>

      <div className="chart-section">
        <h3>Common Conditions</h3>
        <Bar data={conditionData} />
      </div>

      <div className="chart-section">
        <h3>Resource Usage Trends</h3>
        <Line data={trendData} />
      </div>
    </div>
  );
};

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


export default ClinicalAnalyticsDashboard;
