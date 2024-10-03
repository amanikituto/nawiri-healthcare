import React from 'react'; // Removed useState since it's not used
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientDashboard from './components/patients/PatientDashboard';
import ProviderDashboard from './components/providers/ProviderDashboard';
import Landing from './components/Landing/Landing';
import './App.css';
import Footer from './components/layout/Footer'; // Removed Navbar since it's not used
import PatientEngagement from './components/providers/PatientEngagement';
import DataAnalytics from './components/providers/DataAnalytics';
import PracticeManagement from './components/providers/PracticeManagement';
import Login from './components/providers/Login';
import Registration from './components/providers/Registration';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/patients" element={<PatientDashboard />} />
          <Route path="/providers" element={<ProviderDashboard />} />
          <Route path="/practice" element={<PracticeManagement />} />
          <Route path="/patient" element={<PatientEngagement />} />
          <Route path="/analytics" element={<DataAnalytics />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> {/* Footer is being used */}
      </div>
    </Router>
  );
}

export default App;
