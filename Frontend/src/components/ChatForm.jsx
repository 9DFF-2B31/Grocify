import React, { useRef } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const ChatForm = () => {
    const inputRef=useRef();
    const handleFormSubmit=(e)=>{
        e.preventDefault();
  
        const userMessage=inputRef.current.value.trim();
        if(!userMessage) return;
        console.log(userMessage);
        
    }
    return (
        <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Message.." className='message-input' ref={inputRef} required />
            <button className='material-symbols-rounded'><MdKeyboardArrowUp /></button>
        </form>
    )
}

export default ChatForm
