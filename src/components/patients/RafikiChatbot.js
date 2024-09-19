import React, { useState } from 'react';
import './RafikiChatbot.css'; // Import the CSS for chatbot styling

const RafikiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-icon" onClick={toggleChat}>
        <img src="/path/to/chatbot-icon.png" alt="Chat with Rafiki" />
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with Rafiki ai</h3>
            <button onClick={toggleChat}>Close</button>
          </div>
          <div className="chatbot-body">
            {/* Chat content goes here */}
            <p>Habari!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RafikiChatbot;
