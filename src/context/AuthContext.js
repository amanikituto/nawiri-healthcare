import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as apiLogin, register as apiRegister, logout as apiLogout, setAuthToken } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setAuthToken(userData.token);
    }
  }, []);

  const login = async (name, password) => {
    try {
      const response = await apiLogin(name, password);
      const userData = response.data;
      setUser(userData);
      setAuthToken(userData.token);
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };

  const register = async (name, email, password, role) => {
    try {
      const response = await apiRegister(name, email, password, role);
      const userData = response.data;
      setUser(userData);
      setAuthToken(userData.token);
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.error('Registration failed:', error.response?.data?.message || error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setUser(null);
      setAuthToken(null);
      localStorage.removeItem('user');
    }
  };
  
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
