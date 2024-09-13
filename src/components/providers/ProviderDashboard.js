import React from 'react';
import PracticeManagement from './PracticeManagement';
import PatientEngagement from './PatientEngagement';
import DataAnalytics from './DataAnalytics';

const ProviderDashboard = () => {
  return (
    <div>
      <h1>Healthcare Provider Dashboard</h1>
      <PracticeManagement />
      <PatientEngagement />
      <DataAnalytics />
    </div>
  );
};

export default ProviderDashboard;
