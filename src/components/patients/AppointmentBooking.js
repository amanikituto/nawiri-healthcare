// src/components/patients/AppointmentBooking.js
import React, { useState } from 'react';

function AppointmentBooking() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleBookAppointment = () => {
    if (selectedDate && doctor) {
      const newAppointment = { date: selectedDate, doctor };
      setAppointments([...appointments, newAppointment]);
      setSelectedDate('');
      setDoctor('');
      alert('Appointment booked successfully!');
    } else {
      alert('Please select a date and doctor.');
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <label>
        Select Doctor:
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
      </label>
      <label>
        Select Date:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </label>
      <button onClick={handleBookAppointment}>Book Appointment</button>

      <h3>Upcoming Appointments</h3>
      <ul>
        {appointments.map((appt, index) => (
          <li key={index}>
            Doctor: {appt.doctor}, Date: {appt.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentBooking;
