// src/components/patients/HealthDashboard.js
import React, { useState } from 'react';

function HealthDashboard() {
  const [healthData, setHealthData] = useState({
    steps: 5000,
    sleepHours: 7,
    bloodPressure: '120/80',
  });

  const updateData = (type, value) => {
    setHealthData((prevData) => ({
      ...prevData,
      [type]: value,
    }));
  };

  return (
    <div>
      <h2>Personalized Health Dashboard</h2>
      <p>Steps Taken: {healthData.steps}</p>
      <p>Sleep Hours: {healthData.sleepHours}</p>
      <p>Blood Pressure: {healthData.bloodPressure}</p>

      <button onClick={() => updateData('steps', healthData.steps + 1000)}>
        Add 1000 steps
      </button>
    </div>
  );
}

export default HealthDashboard;
