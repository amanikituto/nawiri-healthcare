import React, { useState } from 'react';

function PracticeManagement() {
  const [activeSection, setActiveSection] = useState('Appointments');
  const [appointments, setAppointments] = useState([]);
  const [emrRecords, setEmrRecords] = useState([]);
  const [bills, setBills] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  // Appointment Scheduling - Add new appointment
  const handleAddAppointment = (event) => {
    event.preventDefault();
    const form = event.target;
    const newAppointment = {
      patientName: form.patientName.value,
      date: form.date.value,
      time: form.time.value,
    };
    setAppointments([...appointments, newAppointment]);
    form.reset(); // Clear form
  };

  // EMR Management - Add new EMR record
  const handleAddEMR = (event) => {
    event.preventDefault();
    const form = event.target;
    const newEMR = {
      patientName: form.patientName.value,
      record: form.record.value,
      date: form.date.value,
    };
    setEmrRecords([...emrRecords, newEMR]);
    form.reset();
  };

  // Billing - Add new bill
  const handleAddBill = (event) => {
    event.preventDefault();
    const form = event.target;
    const newBill = {
      patientName: form.patientName.value,
      amount: form.amount.value,
      date: form.date.value,
    };
    setBills([...bills, newBill]);
    form.reset();
  };

  // Chat - Handle chat input
  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setMessages([...messages, { sender: 'Provider', message: chatInput }]);
      setChatInput(''); // Clear chat input
    }
  };

  const sections = {
    Appointments: (
      <div>
        <h2>Appointment Scheduling</h2>
        <form onSubmit={handleAddAppointment}>
          <input type="text" name="patientName" placeholder="Patient Name" required />
          <input type="date" name="date" required />
          <input type="time" name="time" required />
          <button type="submit">Schedule Appointment</button>
        </form>
        <div>
          <h3>Booked Appointments</h3>
          {appointments.length === 0 ? (
            <p>No appointments booked yet.</p>
          ) : (
            <ul>
              {appointments.map((appointment, index) => (
                <li key={index}>{`${appointment.patientName} - ${appointment.date} at ${appointment.time}`}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ),
    EMR: (
      <div>
        <h2>EMR Management</h2>
        <form onSubmit={handleAddEMR}>
          <input type="text" name="patientName" placeholder="Patient Name" required />
          <textarea name="record" placeholder="Medical Record" required></textarea>
          <input type="date" name="date" required />
          <button type="submit">Add EMR Record</button>
        </form>
        <div>
          <h3>Patient EMR Records</h3>
          {emrRecords.length === 0 ? (
            <p>No EMR records available.</p>
          ) : (
            <ul>
              {emrRecords.map((emr, index) => (
                <li key={index}>{`${emr.patientName} - ${emr.record} (on ${emr.date})`}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ),
    Billing: (
      <div>
        <h2>Billing</h2>
        <form onSubmit={handleAddBill}>
          <input type="text" name="patientName" placeholder="Patient Name" required />
          <input type="number" name="amount" placeholder="Amount" required />
          <input type="date" name="date" required />
          <button type="submit">Add Bill</button>
        </form>
        <div>
          <h3>Billing History</h3>
          {bills.length === 0 ? (
            <p>No bills available.</p>
          ) : (
            <ul>
              {bills.map((bill, index) => (
                <li key={index}>{`${bill.patientName} - $${bill.amount} (on ${bill.date})`}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ),
    Communication: (
      <div>
        <h2>Patient Communication</h2>
        <div style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'auto' }}>
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <ul>
              {messages.map((msg, index) => (
                <li key={index}>
                  <strong>{msg.sender}: </strong>{msg.message}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    ),
  };

  const sidebarStyle = {
    width: '250px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#343a40',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const sidebarItemStyle = {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const sidebarItemHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const activeSidebarItemStyle = {
    backgroundColor: '#0056b3',
  };

  const contentStyle = {
    marginLeft: '260px', // to make space for the sidebar
    padding: '20px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  return (
    <div>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h1>Dashboard</h1>
        <div
          style={activeSection === 'Appointments' ? { ...sidebarItemStyle, ...activeSidebarItemStyle } : sidebarItemStyle}
          onClick={() => setActiveSection('Appointments')}
        >
          Appointments
        </div>
        <div
          style={activeSection === 'EMR' ? { ...sidebarItemStyle, ...activeSidebarItemStyle } : sidebarItemStyle}
          onClick={() => setActiveSection('EMR')}
        >
          EMR Management
        </div>
        <div
          style={activeSection === 'Billing' ? { ...sidebarItemStyle, ...activeSidebarItemStyle } : sidebarItemStyle}
          onClick={() => setActiveSection('Billing')}
        >
          Billing
        </div>
        <div
          style={activeSection === 'Communication' ? { ...sidebarItemStyle, ...activeSidebarItemStyle } : sidebarItemStyle}
          onClick={() => setActiveSection('Communication')}
        >
          Patient Communication
        </div>
      </div>

      {/* Main content */}
      <div style={contentStyle}>
        <h1 style={headerStyle}>{activeSection}</h1>
        {sections[activeSection]}
      </div>
    </div>
  );
}

export default PracticeManagement;
