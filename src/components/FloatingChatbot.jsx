"use client";
// FloatingChatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import "./FloatingChatbot.css";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const chatboxRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Show icon after initial page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="chatbot-container">
      {isVisible && (
        <>
          <div
            className={`chatbot-icon ${isOpen ? "active" : ""} ${
              isVisible ? "visible" : ""
            }`}
            onClick={toggleChatbox}
            ref={iconRef}
          >
            <div className="icon-face">
              <div className="eye"></div>
              <div className="eye"></div>
              <div className="mouth"></div>
            </div>
          </div>

          <div className={`chatbox ${isOpen ? "open" : ""}`} ref={chatboxRef}>
            <div className="chatbox-header">
              <h3>Ask Me Anything</h3>
              <button className="close-btn" onClick={handleClose}>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </button>
            </div>

            <div className="chatbox-messages">
              <div className="message bot">
                <div className="avatar">B</div>
                <div className="bubble">Hello! How can I help you today?</div>
              </div>

              <div className="message user">
                <div className="bubble">
                  I have a question about your services
                </div>
              </div>

              <div className="message bot">
                <div className="avatar">B</div>
                <div className="bubble">
                  Sure! I'd be happy to help. What would you like to know?
                </div>
              </div>
            </div>

            <div className="chatbox-input">
              <input
                type="text"
                placeholder="Type your message..."
                className="text-black"
              />
              <button className="send-btn">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path
                    fill="currentColor"
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FloatingChatbot;
