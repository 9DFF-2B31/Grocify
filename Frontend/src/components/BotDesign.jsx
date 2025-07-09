import React, { useState } from 'react'
import ChatBot from './ChatBot'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import ChatForm from './ChatForm'
import ChatMessage from './ChatMessage'

const BotDesign = () => {
    const [chatHistory,setChatHistory]=useState([]);
    const generateBotResponse=()=>{ }
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='container'>
                <div className='chatbot-popup'>
                    <div className='chat-header'>
                        <div className='header-info'>
                            <ChatBot />
                            <h2 className='logo-text'>ChatBot</h2>
                        </div>
                        <button className='material-symbols-rounded'><MdKeyboardArrowDown /></button>
                    </div>
                    <div className='chat-body'>
                        <div className="message bot-message">
                            <ChatBot />
                            <p className='message-text'>Hey there <br /> How Can I help You Today?</p>

                        </div>
                        {/*Render the chat history dynamically*/}
                        {console.log(chatHistory)}
                        {chatHistory.map((chat,index)=>(<ChatMessage  key={index} chat={chat} /> 
                        ))}
                        

                        <div className="chat-footer">
                            <ChatForm setChatHistory={setChatHistory} />

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BotDesign
