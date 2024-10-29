import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ProviderDashboard.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(true); // Set loading state when request is made
    setErrorMessage(''); // Clear previous error message

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
      const response = await apiLogin(formData.email, formData.password);
      if (response && response.data) {
        login(response.data);

        // Redirect based on user role
        switch(response.data.role) {
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
      } else {
        throw new Error('Invalid login response structure');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Invalid email or password');
    } finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>

          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required /
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
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
          />
        </div>

        {errorMessage && <div className="error">{errorMessage}</div>} {/* Show error message */}
        
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
