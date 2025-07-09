import React from 'react'
import ChatBot from './ChatBot'

const ChatMessage = ({chat}) => {
  return (
    <div className={`message ${chat.role==="model"?'bot':'user'}-message`}>
        {chat.role==="model"&&  <ChatBot /> }

                            <p className='message-text'>{chat.text}</p>

                        </div>
  )
}

export default ChatMessage
