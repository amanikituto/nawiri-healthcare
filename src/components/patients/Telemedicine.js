// src/components/patients/Telemedicine.js
import React, { useState } from 'react';

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
    <div>
      <h2>Telemedicine Consultation</h2>
      <label>
        Doctor's Name:
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />
      </label>
      <label>
        Your Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
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
