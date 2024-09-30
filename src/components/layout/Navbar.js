import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4><Link to="/">Nawiri Healthcare</Link></h4>
      <ul>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/providers">Providers</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
