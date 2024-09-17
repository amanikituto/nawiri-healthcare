import React, { useState, useEffect } from 'react';
import appointment from '../../assets/Online Booking Software Market Size, Share, Trends, and Forecast till 2025.jpeg';
import './PatientDashboard.css';

function AppointmentBooking() {
  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });
  const [savedAppointments, setSavedAppointments] = useState(() => {
    const savedSavedAppointments = localStorage.getItem('savedAppointments');
    return savedSavedAppointments ? JSON.parse(savedSavedAppointments) : [];
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);
  const [view, setView] = useState('upcoming'); // New state for toggling views

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
    localStorage.setItem('savedAppointments', JSON.stringify(savedAppointments));
  }, [appointments, savedAppointments]);

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

  const handleCheckboxChange = (index) => {
    setSelectedAppointment(selectedAppointment === index ? null : index);
  };

  const handleDeleteClick = (appointmentIndex) => {
    setAppointmentToDelete(appointmentIndex);
    setShowModal(true);
  };

  const handleSaveClick = (appointmentIndex) => {
    const appointmentToSave = appointments[appointmentIndex];
    setSavedAppointments([...savedAppointments, appointmentToSave]);
    const updatedAppointments = appointments.filter((_, index) => index !== appointmentIndex);
    setAppointments(updatedAppointments);
  };

  const handleModalConfirm = () => {
    if (appointmentToDelete !== null) {
      const updatedAppointments = appointments.filter((_, index) => index !== appointmentToDelete);
      setAppointments(updatedAppointments);
      setAppointmentToDelete(null);
    }
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setAppointmentToDelete(null);
    setShowModal(false);
  };

  const toggleView = () => {
    setView(view === 'upcoming' ? 'saved' : 'upcoming');
  };

  return (
    <div>
      <div className="appointment-box">
        <h2>Book an Appointment</h2>
        <img src={appointment} alt="appointment" />
        
        <div className="inputBox">
          <span>Select Doctor:</span>
          <input
            type="text"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          />
        </div>

        <div className="inputBox">
          <span>Select Date:</span>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>

        <button onClick={handleBookAppointment}>Book Appointment</button>
      </div>

      <button onClick={toggleView}>
        {view === 'upcoming' ? 'Show Saved Appointments' : 'Show Upcoming Appointments'}
      </button>

      <h3>{view === 'upcoming' ? 'Upcoming Appointments' : 'Saved Appointments'}</h3>
      {view === 'upcoming' && appointments.length > 0 && (
        <div className="upcoming-appointments-box">
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index} className="appointment-item">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    name={`appointment${index}`}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="appointment-info">
                  Doctor: {appointment.doctor}<br /> Date: {appointment.date}
                </span>
                {selectedAppointment === index && (
                  <div className="dropdown-menu">
                    <ul>
                      <li onClick={() => handleDeleteClick(index)}>Delete Appointment</li>
                      <li onClick={() => handleSaveClick(index)}>Save Appointment</li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {view === 'saved' && savedAppointments.length > 0 && (
        <div className="saved-appointments-box">
          <ul>
            {savedAppointments.map((appointment, index) => (
              <li key={index}>
                Doctor: {appointment.doctor}<br /> Date: {appointment.date}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this appointment?</p>
            <button onClick={handleModalConfirm}>Yes</button>
            <button onClick={handleModalCancel}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentBooking;
