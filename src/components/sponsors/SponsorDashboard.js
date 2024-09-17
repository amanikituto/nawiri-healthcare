import React from 'react';
import ClaimsManagement from './ClaimsManagement';
import CostTransparency from './CostTransparency';
import WellnessPrograms from './WellnessPrograms';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer'
import './SponsorDashboard.css'; // Import the CSS file

const SponsorDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="column-left">
          <WellnessPrograms />
          <CostTransparency />
        </div>
        <div className="column-right">
          <ClaimsManagement />
        </div>
      </div>
    </div>
  );
};

export default SponsorDashboard;
