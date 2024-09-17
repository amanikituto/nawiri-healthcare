import React, { useState } from 'react';
import steps from '../../assets/motivation (1).png';
import sleep from '../../assets/slumber (1).png';
import blood from '../../assets/arm (1).png';
import './healthdashboard.css'; // Assuming you have a CSS file for styling

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

  // Function to calculate percentage for steps and sleep
  const calculatePercentage = (type) => {
    if (type === 'steps') {
      return (healthData.steps / 10000) * 100; // Assuming 10,000 steps as the goal
    }
    if (type === 'sleepHours') {
      return (healthData.sleepHours / 8) * 100; // Assuming 8 hours is the recommended sleep
    }
    return 100; // Default for blood pressure
  };

  // Function to get current date
  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };

  return (
    <div className="health-dashboard-container">
      <div className="health-cards-row">
        <div className="step-card">
          <p>Steps Taken: {healthData.steps}</p>
          <img className='stepsimg' src={steps} alt='steps' />
          {/* Bar graph for steps with percentage */}
          <div className="graph-container">
            <div
              className="graph-bar"
              style={{ width: `${calculatePercentage('steps')}%` }}
            >
              <span className="graph-percentage">
                {Math.round(calculatePercentage('steps'))}%
              </span>
            </div>
          </div>

          {/* Current Date and Button at the Bottom */}
          <div className="bottom-row">
            <div className="date-box">Date: {getCurrentDate()}</div>
            <button className="step-btn" onClick={() => updateData('steps', healthData.steps + 1000)}>
              Add 1000 steps
            </button>
          </div>
        </div>

        <div className="sleep-card">
          <p>Sleep Hours: {healthData.sleepHours}</p>
          <img className='sleepimg' src={sleep} alt='sleep' />
          {/* Bar graph for sleep with percentage */}
          <div className="graph-container">
            <div
              className="graph-bar"
              style={{ width: `${calculatePercentage('sleepHours')}%` }}
            >
              <span className="graph-percentage">
                {Math.round(calculatePercentage('sleepHours'))}%
              </span>
            </div>
          </div>

          {/* Current Date */}
          <div className="bottom-row">
            <div className="date-box">Date: {getCurrentDate()}</div>
          </div>
        </div>

        <div className="blood-card">
          <p>Blood Pressure: {healthData.bloodPressure}</p>
          <img className='bloodimg' src={blood} alt='blood' />
          {/* Bar graph for blood pressure with percentage */}
          <div className="graph-container">
            <div
              className="graph-bar"
              style={{ width: `${calculatePercentage('bloodPressure')}%` }}
            >
              <span className="graph-percentage">
                {Math.round(calculatePercentage('bloodPressure'))}%
              </span>
            </div>
          </div>

          {/* Current Date */}
          <div className="bottom-row">
            <div className="date-box">Date: {getCurrentDate()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthDashboard;
