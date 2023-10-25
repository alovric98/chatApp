import React, { useState } from "react";
import MessageInput from "./components/MessageInput";
import MessageDisplay from "./components/MessageDisplay";
import { getRandomColor, getRandomName } from "./components/helpers";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="app">
      <h1>Chat Application</h1>
      <MessageDisplay messages={messages} />
      <MessageInput onMessageSent={handleNewMessage} />
    </div>
  );
};

export default App;
