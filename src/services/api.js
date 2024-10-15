import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHomePage = () => {
  return api.get('/');
};

export const login = (email, password) => {
  return api.post('/login', { email, password });
};


export const register = (email, password, role) => {
  return api.post('/register', { email, password, role });
};


export const getAppointments = () => {
  return api.get('/appointments');
};

export const createAppointment = (doctorId, description) => {
  return api.post('/appointments', { doctor_id: doctorId, description });
};

export const getMedicalRecords = () => {
  return api.get('/medical-records');
};

export const createMedicalRecord = (patientId, record) => {
  return api.post('/medical-records', { patient_id: patientId, record });
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
