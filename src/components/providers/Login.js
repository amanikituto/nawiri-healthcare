import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ProviderDashboard.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
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
      const userData = await login(formData.name, formData.password);
      // Redirect based on user role
      switch(userData.role) {
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
      console.error('Login failed:', error.message);
      // Handle login error (e.g., display error message to user)
    }
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
