import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './ProviderDashboard.css';
import axios from 'axios';
import Navbar from '../layout/Navbar';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataAnalytics = () => {
  const [commonConditions, setCommonConditions] = useState([]);
  const [resourceTrends, setResourceTrends] = useState([]);

  useEffect(() => {
    // Fetch common conditions
    axios
      .get('http://localhost:3000/api/analytics/common-conditions')
      .then((response) => setCommonConditions(response.data))
      .catch((error) => console.error(error));

    // Fetch resource trends
    axios
      .get('http://localhost:3000/api/analytics/resource-trends')
      .then((response) => setResourceTrends(response.data))
      .catch((error) => console.error(error));
  }, []);

  const conditionData = {
    labels: commonConditions.map((c) => c._id),
    datasets: [
      {
        label: 'Occurrences',
        data: commonConditions.map((c) => c.count),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  const trendData = {
    labels: resourceTrends.map((t) => `${t._id.year}-${t._id.month}`),
    datasets: [
      {
        label: 'Total Resources Used',
        data: resourceTrends.map((t) => t.totalResources),
        backgroundColor: 'rgba(153,102,255,0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Analytics Dashboard</h2>

      <div>
        <h3>Common Conditions</h3>
        <Bar data={conditionData} />
      </div>

      <div>
        <h3>Resource Usage Trends</h3>
        <Line data={trendData} />
      </div>
    </div>
  );
};

export default DataAnalytics;
