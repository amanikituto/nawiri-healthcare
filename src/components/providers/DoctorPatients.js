import React, { useEffect, useState } from 'react';
import { getPatientsForDoctor, getPatientMessages } from '../../services/api';
import PatientEMR from './PatientEMR'; 
import './DoctorPatients.css'; // Add your CSS for styling

const DoctorPatients = ({ doctorId }) => {
  const [patients, setPatients] = useState([]);
  const [loadingPatients, setLoadingPatients] = useState(true);
  const [showAllPatients, setShowAllPatients] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [activeChat, setActiveChat] = useState(null); // Track active chat box
  const [chatInput, setChatInput] = useState(''); // Message input state
  const [selectedPatientId, setSelectedPatientId] = useState(null); // Track selected patient for EMR

  useEffect(() => {
    // Fetch patients when the component mounts
    getPatientsForDoctor(doctorId).then((data) => {
      setPatients(data);
      setLoadingPatients(false);
    });

    // Fetch patient messages when the component mounts
    getPatientMessages().then((data) => {
      setMessages(data);
      setLoadingMessages(false);
    });
  }, [doctorId]);

  const handleShowMorePatients = () => {
    setShowAllPatients(!showAllPatients);
  };

  const handleShowMoreMessages = () => {
    setShowAllMessages(!showAllMessages);
  };

  const handleReplyClick = (patientId) => {
    setActiveChat(activeChat === patientId ? null : patientId); // Toggle chat box
  };

  const handleSendMessage = (patientId) => {
    console.log(`Message to patient ${patientId}: ${chatInput}`);
    // Here you can add logic to send the message to the backend
    setChatInput(''); // Clear input after sending
  };

  const handlePatientClick = (patientId) => {
    setSelectedPatientId(patientId); // Set the clicked patient ID to show EMR
  };

  const visiblePatients = showAllPatients ? patients : patients.slice(0, 3); // Show 3 patients initially
  const visibleMessages = showAllMessages ? messages : messages.slice(0, 3); // Show 3 messages initially

  if (loadingPatients || loadingMessages) {
    return <p>Loading...</p>;
  }

  return (
    <div className="appointments-container">
      <h2>Appointment Scheduling</h2>
      <div className="cards-wrapper">
        {visiblePatients.map((patient) => (
          <div className="appointment-card" key={patient.id} onClick={() => handlePatientClick(patient.id)}>
            <div className="card-content">
              <p><strong>Patient Name:</strong> {patient.name}</p>
              <p><strong>Patient Age:</strong> {patient.age}</p>
              <p><strong>Date:</strong> {patient.appointmentDate}</p>
              <p><strong>Time:</strong> {patient.appointmentTime}</p>
            </div>
            <button className="reminder-button">
              <i className="bell-icon">🔔</i> {/* Placeholder for reminder icon */}
            </button>
            {/* Display EMR as a card inside the patient card */}
            {selectedPatientId === patient.id && (
              <div className="emr-card">
                <PatientEMR patientId={patient.id} />
              </div>
            )}
          </div>
        ))}
      </div>
      {patients.length > 3 && (
        <button className="show-more" onClick={handleShowMorePatients}>
          {showAllPatients ? 'Show less...' : 'Show more...'}
        </button>
      )}

      <div className="PatientCommunication">
        <h2>Patient Messages</h2>
        <div className="cards-wrapper">
          {visibleMessages.map((message) => (
            <div className="appointment-card" key={message.id}>
              <div className="card-content">
                <p><strong>Patient Name:</strong> {message.name}</p>
                <p><strong>Message:</strong> {message.message}</p>
                <button onClick={() => handleReplyClick(message.id)}>
                  {activeChat === message.id ? 'Close' : 'Reply'}
                </button>

                {/* Chat Box appears if reply is clicked for this message */}
                {activeChat === message.id && (
                  <div className="chat-box">
                    <textarea
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Type your reply here..."
                    />
                    <button onClick={() => handleSendMessage(message.id)}>Send</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {messages.length > 3 && (
          <button className="show-more" onClick={handleShowMoreMessages}>
            {showAllMessages ? 'Show less...' : 'Show more...'}
          </button>
        )}
      </div>
    </div>
  );
};

export default DoctorPatients;
