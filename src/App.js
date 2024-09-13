import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientDashboard from './components/patients/PatientDashboard';
import SponsorDashboard from './components/sponsors/SponsorDashboard';
import ProviderDashboard from './components/providers/ProviderDashboard';
import Navbar from './components/layout/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/patients" element={<PatientDashboard />} />
          <Route path="/sponsors" element={<SponsorDashboard />} />
          <Route path="/providers" element={<ProviderDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
