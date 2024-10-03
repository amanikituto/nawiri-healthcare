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

export default ClinicalAnalyticsDashboard;
