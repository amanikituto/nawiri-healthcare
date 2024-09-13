import React, { useState, useEffect } from 'react';
import RafikiService from '../rafiki/RafikiService';

const HealthDashboard = () => {
  const [healthTips, setHealthTips] = useState('');

  useEffect(() => {
    async function fetchTips() {
      const response = await RafikiService.getAnswer('What are the best ways to manage diabetes?');
      setHealthTips(response);
    }
    fetchTips();
  }, []);

  return (
    <div>
      <h2>Personalized Health Dashboard</h2>
      <p>Track health data, monitor chronic conditions, and receive insights.</p>
      <h3>Rafiki's Health Tip:</h3>
      <p>{healthTips}</p>
    </div>
  );
};

export default HealthDashboard;
