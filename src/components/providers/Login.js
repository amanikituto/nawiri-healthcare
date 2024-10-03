import React, { useState } from 'react';
import './ProviderDashboard.css';
import Navbar from '../layout/Navbar'; // Import the Navbar component

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email || !formData.password) {
      setErrorMessage('Both fields are required.');
      return;
    }

    // Clear error and submit login data to the backend
    setErrorMessage('');
    console.log(formData);
    // Call API for login or handle further authentication logic here
  };

  return (
    <>
      <Navbar /> {/* Navbar added */}
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
