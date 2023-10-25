import React, { useState } from "react";
import { getRandomColor, getRandomName } from "./helpers";
import "./MessageInput.css";

const MessageInput = ({ onMessageSent }) => {
  const [userName, setUserName] = useState(getRandomName());
  const [userColor, setUserColor] = useState(getRandomColor());
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      content: message,
      user: {
        name: userName,
        color: userColor,
      },
    };

    onMessageSent(newMessage);

    setMessage("");
  };

  return (
    <div className="message-input-container">
      <div className="user-info">{userName}</div>
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
