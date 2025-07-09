import React, { useRef } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const ChatForm = ({setChatHistory}) => {
    const inputRef=useRef();
    const handleFormSubmit=(e)=>{
        e.preventDefault();
  
        const userMessage=inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value="";

        //Update chat history with the user's message
        setChatHistory(history=>[...history,{role:"user",text:userMessage}]);   
        
        //Add a "thinking..." placeholder for the bot's response
        setTimeout(()=>setChatHistory(history=>[...history,{role:"model",text:"Thinking..."}]),600); 
        
    }; 
    return (
        <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Message.." className='message-input' ref={inputRef} required />
            <button className='material-symbols-rounded'><MdKeyboardArrowUp /></button>
        </form>
    )
}

export default ChatForm
