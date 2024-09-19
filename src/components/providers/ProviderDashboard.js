import React from 'react';
import PracticeManagement from './PracticeManagement';
import PatientEngagement from './PatientEngagement';
import DataAnalytics from './DataAnalytics';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import RafikiChatbot from './RafikiChatbot'; // Import the chatbot component
import './ProviderDashboard.css'; // Import the CSS for card styling

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
      <RafikiChatbot /> {/* Add the chatbot component */}
      <Footer />
    </div>
  );
};

export default ProviderDashboard;
