// BotDesign.jsx

import React, { useState, useEffect, useRef } from "react";
import { FaRegCommentAlt, FaRegWindowClose } from "react-icons/fa";

import ChatBot from "./ChatBot";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { GoogleGenAI } from "@google/genai";
import { Companyinfo } from "./Companyinfo";

const BotDesign = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideinchat: true,
      role: "model",
      text: Companyinfo,
    },
  ]);

  const [showChatBot, setShowChatBot] = useState(false);

  const chatRef = useRef(null); // Holds the Gemini chat instance
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  useEffect(() => {
    const initializeChat = async () => {
      const ai = new GoogleGenAI({
        apiKey: "AIzaSyDqH7z5lIy3SH5_8GWTZN-eJa6BDzp1ASo", // 🔐 Replace this with your Gemini API Key
      });

      chatRef.current = await ai.chats.create({
        model: "gemini-2.5-flash",
        history: [
        {
          role: "user",
          text: [`Here is some context for future conversations:\n\n${Companyinfo}`],
        },
        {
          role: "model",
          text: ["Got it! I’ll use this context when answering future questions."],
        },
      ],
      });
    };

    initializeChat();
  }, []);

  const generateBotResponse = async (userText) => {
    try {
      // 1. Add user message to chat history
      setChatHistory((prev) => [...prev, { role: "user", text: userText }]);

      const thinkingId = Date.now(); // unique ID for tracking
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: "Thinking...", id: thinkingId },
      ]);

      // 2. Send message to Gemini
      const result = await chatRef.current.sendMessage({
        message: userText,
      });

      // 3. Get bot's response and update history
      const botReply = result.text;
      setChatHistory((prev) =>
        prev.map((msg) =>
          msg.id === thinkingId ? { ...msg, text: botReply } : msg
        )
      );
    } catch (error) {
      console.error("Gemini Error:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: "Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <div className="w-full ">
      <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
        <button
          id="chatbot-toggler"
          onClick={() => setShowChatBot((prev) => !prev)}
        >
          <span className="material-symbols-rounded">
            {showChatBot ? <FaRegWindowClose /> : <FaRegCommentAlt />}
          </span>
        </button>
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <ChatBot />
              <h2 className="logo-text">ChatBot</h2>
            </div>
            <button
              onClick={() => setShowChatBot((prev) => !prev)}
              className="material-symbols-rounded"
            >
              <MdKeyboardArrowDown />
            </button>
          </div>

          <div className="chat-body">
            <ChatMessage
              chat={{ role: "model", text: "Hey there,  How can i help you?" }}
            />
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
            <div ref={bottomRef} />

            <div className="chat-footer">
              <ChatForm generateBotResponse={generateBotResponse} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotDesign;
