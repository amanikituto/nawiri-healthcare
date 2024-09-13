import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Nawiri Healthcare</h2>
      <ul>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/providers">Providers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
