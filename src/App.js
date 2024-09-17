import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientDashboard from './components/patients/PatientDashboard';
import SponsorDashboard from './components/sponsors/SponsorDashboard';
import ProviderDashboard from './components/providers/ProviderDashboard';
import Landing from './components/Landing/Landing';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/patients" element={<PatientDashboard />} />
          <Route path="/sponsors" element={<SponsorDashboard />} />
          <Route path="/providers" element={<ProviderDashboard />} />
        </Routes>
        {/* Pass toggleTheme function to Footer */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
