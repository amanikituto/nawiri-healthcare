import React, { useEffect, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './navbar.css'

const Navbar = memo(() => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  console.log('Navbar rendering, user:', user);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  useEffect(() => {
    console.log('User state changed:', user);
  }, [user]);

  return (
    <nav className="navbar">
      <h4><Link to="/">Nawiri Healthcare</Link></h4>
      <ul>
        {user ? (
          <>
            {user.role === 'patient' && <li><Link to="/patients">Patient Dashboard</Link></li>}
            {user.role === 'sponsor' && <li><Link to="/sponsors">Sponsor Dashboard</Link></li>}
            {user.role === 'provider' && (
              <>
                <li><Link to="/providers">Provider Dashboard</Link></li>
                <li><Link to="/practice">Practice Management</Link></li>
                <li><Link to="/patient">Patient Engagement</Link></li>
                <li><Link to="/analytics">Data Analytics</Link></li>
                <li><Link to="/AiDiagnosis">AI Diagnosis Support</Link></li>
              </>
            )}
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
});

export default Navbar;
