// MessageDisplay.js

import React from "react";
import "./MessageDisplay.css";

const MessageDisplay = ({ messages }) => {
  return (
    <div className="message-display">
      {messages.map((message, index) => (
        <div key={index} className="chat-message">
          <div
            className="user-avatar"
            style={{ backgroundColor: message.user.color }}
          >
            {message.user.name.charAt(0)}
          </div>
          <div className="message-content">
            <div className="message-header">
              <span className="user-name" style={{ color: message.user.color }}>
                {message.user.name}
              </span>
            </div>
            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;
