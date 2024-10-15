import React, { createContext, useState, useContext } from 'react';
import { login as apiLogin, register as apiRegister, setAuthToken } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await apiLogin(email, password);
      const userData = {
        email: email,
        role: response.data.role,
        token: response.data.token
      };
      setUser(userData);
      setAuthToken(response.data.token);
      return userData;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (email, password, role) => {
    try {
      const response = await apiRegister(email, password, role);
      const userData = {
        email: email,
        role: role,
        token: response.data.token
      };
      setUser(userData);
      setAuthToken(response.data.token);
      return userData;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
