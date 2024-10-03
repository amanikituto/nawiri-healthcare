import React, { useState } from 'react';
import './ProviderDashboard.css';
import Navbar from '../layout/Navbar'; // Import the Navbar component

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient' // Default role
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setErrorMessage('All fields are required.');
      return;
    }

    // Clear error and submit registration data to the backend
    setErrorMessage('');
    console.log(formData);
    // Call API for registration or handle further logic here
  };

  return (
    <>
      <Navbar /> {/* Navbar added */}
      <div className="registration-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your name" 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your email" 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              placeholder="Enter a secure password" 
            />
          </div>
          <div>
            <label>Register as:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="patient">Patient</option>
              <option value="sponsor">Sponsor</option>
              <option value="provider">Provider</option>
            </select>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
