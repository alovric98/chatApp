import React, { useState } from "react";
import MessageInput from "./MessageInput"; // Import your MessageInput component
import MessageDisplay from "./MessageDisplay"; // Import your MessageDisplay component

const ChatApp = () => {
  // Initialize the state to hold chat messages
  const [messages, setMessages] = useState([]);

  // Function to handle sending messages
  const sendMessage = (newMessage) => {
    // Add the new message to the messages state
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      {/* Render the MessageDisplay component */}
      <MessageDisplay messages={messages} />

      {/* Render the MessageInput component and pass the sendMessage function */}
      <MessageInput onMessageSent={sendMessage} />
    </div>
  );
};

export default ChatApp;
