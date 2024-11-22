// cleanup or API subscription 
import React, { useState, useEffect } from 'react';

function FakeChatApp() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = () => {
      setMessages((prevMessages) => [
        ...prevMessages,
        `New message at ${new Date().toLocaleTimeString()}`,
      ]);
    };

    // Simulating a message subscription
    const interval = setInterval(fetchMessages, 10000);

    // Cleanup function to unsubscribe from the "chat server"
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div>
      <h1>Chat Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default FakeChatApp;
