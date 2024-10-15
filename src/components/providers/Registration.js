import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import './ProviderDashboard.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient'
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData.email, formData.password, formData.role);
      login(response.data);
      // Redirect based on user role
      switch(formData.role) {
        case 'patient':
          navigate('/patients');
          break;
        case 'sponsor':
          navigate('/sponsors');
          break;
        case 'provider':
          navigate('/providers');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Register as:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="patient">Patient</option>
            <option value="sponsor">Sponsor</option>
            <option value="provider">Provider</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
