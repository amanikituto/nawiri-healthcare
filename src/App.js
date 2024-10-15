import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import PatientDashboard from './components/patients/PatientDashboard';
import SponsorDashboard from './components/sponsors/SponsorDashboard';
import ProviderDashboard from './components/providers/ProviderDashboard';
import Landing from './components/Landing/Landing';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PatientEngagement from './components/providers/PatientEngagement';
import DataAnalytics from './components/providers/DataAnalytics';
import PracticeManagement from './components/providers/PracticeManagement';
import Login from './components/providers/Login';
import Registration from './components/providers/Registration';
import AIDiagnosisSupport from './components/providers/AIDiagnosisSupport';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/patients" element={<ProtectedRoute allowedRoles={['patient']}><PatientDashboard /></ProtectedRoute>} />
            <Route path="/sponsors" element={<ProtectedRoute allowedRoles={['sponsor']}><SponsorDashboard /></ProtectedRoute>} />
            <Route path="/providers" element={<ProtectedRoute allowedRoles={['provider']}><ProviderDashboard /></ProtectedRoute>} />
            <Route path="/practice" element={<ProtectedRoute allowedRoles={['provider']}><PracticeManagement /></ProtectedRoute>} />
            <Route path="/patient" element={<ProtectedRoute allowedRoles={['provider']}><PatientEngagement /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute allowedRoles={['provider']}><DataAnalytics /></ProtectedRoute>} />
            <Route path="/AiDiagnosis" element={<ProtectedRoute allowedRoles={['provider']}><AIDiagnosisSupport /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
