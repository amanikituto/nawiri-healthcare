import React, { useState } from 'react';
import './RafikiChatbot.css'; // Import the CSS for chatbot styling

const RafikiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', from: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, { text: userInput, from: 'user' }]);
    setUserInput('');

    try {
      // Replace this URL with your Rafiki AI API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();
      const botMessage = data.reply; // Adjust based on your API response structure

      // Add bot response to chat
      setMessages([...messages, { text: userInput, from: 'user' }, { text: botMessage, from: 'bot' }]);
    } catch (error) {
      console.error('Error communicating with Rafiki AI:', error);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-icon" onClick={toggleChat}>
        <img src="/path/to/chatbot-icon.png" alt="Chat with Rafiki" />
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with Rafiki</h3>
            <button onClick={toggleChat}>Close</button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.from}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RafikiChatbot;
