import React from 'react';
import PracticeManagement from './PracticeManagement';
import PatientEngagement from './PatientEngagement';
import DataAnalytics from './DataAnalytics';
import Navbar from '../layout/Navbar';
import './ProviderDashboard.css'; // Import the CSS for card styling
import Footer from '../layout/Footer';

const ProviderDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div>
          <div className="dashboard-columns">
            <div className="dashboard-column">
              <div className="card">
                <PracticeManagement />
              </div>
            </div>
            <div className="dashboard-column">
              <div className="card">
                <PatientEngagement />
              </div>
            </div>
            <div className="dashboard-column">
              <div className="card">
                <DataAnalytics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
