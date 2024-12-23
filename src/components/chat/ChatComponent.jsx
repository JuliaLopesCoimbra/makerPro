import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./ChatComponent.css";

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      // Simulate a bot response (optional)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Esta é uma resposta automática.", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      {isOpen && (
        <div className={`chat-box open`}>
          <div className="chat-header">
            <span>Chat</span>
            <button className="close-btn" onClick={toggleChat}>
              ×
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user" ? "user" : "bot"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      )}
      <div className="chat-icon" onClick={toggleChat}>
        <FontAwesomeIcon icon={faComments} size="2x" />
      </div>
    </div>
  );
};

export default ChatComponent;
