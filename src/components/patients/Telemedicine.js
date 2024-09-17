import React, { useState } from 'react';
import telemed from '../../assets/Virtual Doctor Care_ What You Need to Know.jpeg';
import './PatientDashboard.css';

function Telemedicine() {
  const [consultation, setConsultation] = useState('');
  const [doctor, setDoctor] = useState('');
  const [message, setMessage] = useState('');

  const startConsultation = () => {
    if (doctor && message) {
      setConsultation(`Virtual consultation with Dr. ${doctor}: "${message}"`);
      setDoctor('');
      setMessage('');
    } else {
      alert('Please provide doctor and consultation message.');
    }
  };

  return (
    <div className="telemedicine-box">
      <h2>Telemedicine Consultation</h2>
      <img src={telemed} alt='telemedicine'/>
      
      <div className="inputBox">
        <span>Doctor's Name:</span>
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        />
      </div>

      <div className="inputBox">
        <span>Your Message:</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button onClick={startConsultation}>Start Virtual Consultation</button>

      {consultation && (
        <div>
          <h3>Current Consultation:</h3>
          <p>{consultation}</p>
        </div>
      )}
    </div>
  );
}

export default Telemedicine;
