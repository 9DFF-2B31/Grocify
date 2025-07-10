// ChatForm.jsx

import React, { useRef } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const ChatForm = ({ generateBotResponse }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;

        inputRef.current.value = '';
        generateBotResponse(userMessage); // ✅ Let parent handle response logic
    };

    return (
        <form className="chat-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Message.."
                className="message-input"
                ref={inputRef}
                required
            />
            <button className="material-symbols-rounded">
                <MdKeyboardArrowUp />
            </button>
        </form>
    );
};

export default ChatForm;
