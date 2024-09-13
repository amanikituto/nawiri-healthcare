import React from 'react';
import ClaimsManagement from './ClaimsManagement';
import CostTransparency from './CostTransparency';
import WellnessPrograms from './WellnessPrograms';

const SponsorDashboard = () => {
  return (
    <div>
      <h1>Sponsor Dashboard</h1>
      <ClaimsManagement />
      <CostTransparency />
      <WellnessPrograms />
    </div>
  );
};

export default SponsorDashboard;
