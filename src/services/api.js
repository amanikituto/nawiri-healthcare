import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (name, password) => {
  return api.post('/login', { name, password });
};

export const register = (name, email, password, role) => {
  return api.post('/register', { name, email, password, role });
};

export const logout = () => {
  return api.post('/logout');
};

export const getAppointments = () => {
  return api.get('/appointments');
};

export const createAppointment = (doctorId, date, description) => {
  return api.post('/appointments', { doctor_id: doctorId, date, description });
};

export const getMedicalRecords = () => {
  return api.get('/medical-records');
};

export const createMedicalRecord = (patientId, record) => {
  return api.post('/medical-records', { patient_id: patientId, record });
};

export const getUserProfile = () => {
  return api.get('/user');
};

export const updateUserProfile = (userData) => {
  return api.put('/user', userData);
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
