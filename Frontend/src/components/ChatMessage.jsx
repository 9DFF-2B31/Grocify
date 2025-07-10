import React from 'react';
import ChatBot from './ChatBot';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ chat }) => {
  return (
    <div className={`message ${chat.role === 'model' ? 'bot' : 'user'}-message`}>
      {chat.role === 'model' && <ChatBot />}

      <div className="message-text">
        <ReactMarkdown>{chat.text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;
