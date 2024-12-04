import React, { useState } from 'react';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [currentMessage, setCurrentMessage] = useState<string>('');

    const sendMessage = () => {
        if (currentMessage.trim()) {
            setMessages([...messages, currentMessage]);
            setCurrentMessage('');
        }
    };

    return (
        <div className="chat">
            <h1>Chat</h1>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;