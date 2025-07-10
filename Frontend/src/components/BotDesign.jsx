// BotDesign.jsx

import React, { useState, useEffect, useRef } from 'react';
import ChatBot from './ChatBot';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import { GoogleGenAI } from '@google/genai';

const BotDesign = () => {
    const [chatHistory, setChatHistory] = useState([
        { role: 'model', text: 'Hey there! How can I help you today?' }
    ]);

    const chatRef = useRef(null); // Holds the Gemini chat instance

    useEffect(() => {
        const initializeChat = async () => {
            const ai = new GoogleGenAI({
                apiKey: 'AIzaSyDqH7z5lIy3SH5_8GWTZN-eJa6BDzp1ASo', // 🔐 Replace this with your Gemini API Key
            });

            chatRef.current = await ai.chats.create({
                model: 'gemini-2.5-flash',
                history: [],
            });
        };

        initializeChat();
    }, []);

    const generateBotResponse = async (userText) => {
        try {
            // 1. Add user message to chat history
            setChatHistory((prev) => [...prev, { role: 'user', text: userText }]);

            // 2. Send message to Gemini
            const result = await chatRef.current.sendMessage({ message: userText });

            // 3. Get bot's response and update history
            const botReply = result.text;
            setChatHistory((prev) => [...prev, { role: 'model', text: botReply }]);
        } catch (error) {
            console.error('Gemini Error:', error);
            setChatHistory((prev) => [
                ...prev,
                { role: 'model', text: 'Something went wrong. Please try again.' },
            ]);
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="container">
                <div className="chatbot-popup">
                    <div className="chat-header">
                        <div className="header-info">
                            <ChatBot />
                            <h2 className="logo-text">ChatBot</h2>
                        </div>
                        <button className="material-symbols-rounded">
                            <MdKeyboardArrowDown />
                        </button>
                    </div>
                    <div className="chat-body">
                        {chatHistory.map((chat, index) => (
                            <ChatMessage key={index} chat={chat} />
                        ))}

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
