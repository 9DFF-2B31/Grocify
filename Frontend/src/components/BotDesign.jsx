import React from 'react'
import ChatBot from './ChatBot'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import ChatForm from './ChatForm'

const BotDesign = () => {
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
                        <div className="message user-message">

                            <p className='message-text'>Hey there <br /> How Can I help You Today?</p>

                        </div>
                        <div className="chat-footer">
                            <ChatForm />

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BotDesign
