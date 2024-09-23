// src/services/api.js

export const getPatientsForDoctor = (doctorId) => {
  // Mocking the API response for appointment data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe', age: 34, appointmentDate: '2024-09-20', appointmentTime: '10:00 AM' },
        { id: 2, name: 'Jane Smith', age: 28, appointmentDate: '2024-09-21', appointmentTime: '11:30 AM' },
        { id: 3, name: 'Alice Johnson', age: 45, appointmentDate: '2024-09-22', appointmentTime: '2:00 PM' },
        { id: 4, name: 'Bob Brown', age: 52, appointmentDate: '2024-09-23', appointmentTime: '9:15 AM' },
        { id: 5, name: 'Emily Davis', age: 38, appointmentDate: '2024-09-24', appointmentTime: '1:45 PM' },
        { id: 6, name: 'Michael Wilson', age: 40, appointmentDate: '2024-09-25', appointmentTime: '3:30 PM' },
      ]);
    }, 1000); // Simulate a delay
  });
};

// Mocking patient messaging data
export const getPatientMessages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe', message: 'I need to reschedule my appointment.' },
        { id: 2, name: 'Jane Smith', message: 'Can you provide more details on my prescription?' },
        { id: 3, name: 'Alice Johnson', message: 'I have a question about my lab results.' },
        { id: 4, name: 'Bob Brown', message: 'Can I get a refill for my medication?' },
        { id: 5, name: 'Emily Davis', message: 'I’m feeling better, do I still need to come in?' },
        { id: 6, name: 'Michael Wilson', message: 'Is there any update on my test results?' },
      ]);
    }, 1000); // Simulate a delay
  });
};

// src/services/api.js

export const getPatientEMR = (patientId) => {
  // Mocking the API response
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve({
              id: patientId,
              name: 'John Doe',
              age: 34,
              medicalHistory: [
                  { date: '2024-01-15', diagnosis: 'Hypertension', treatment: 'Medication A' },
                  { date: '2023-11-10', diagnosis: 'Diabetes', treatment: 'Insulin' }
              ],
              medications: [
                  { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
                  { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' }
              ],
              allergies: ['Peanuts', 'Penicillin'],
              lastVisit: '2024-02-01',
              labResults: [
                  { test: 'Blood Sugar', result: 'Normal', date: '2024-01-15' },
                  { test: 'Cholesterol', result: 'Elevated', date: '2024-01-15' }
              ]
          });
      }, 1000); // Simulate API delay
  });
};
