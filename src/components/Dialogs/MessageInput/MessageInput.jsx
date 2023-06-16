import style from "./MessageInput.module.css";
import React from "react";

const MessageInput = ({ sendChanges, dialogsState, addMessage }) => {
    const onMessageChange = (e) => {
        const text = e.target.value;
        sendChanges(text);
    };

    return (
        <div className={style.messageInputContainer}>
            <input
                onChange={onMessageChange}
                value={dialogsState.messageInput}
                className={style.input}
                type="text"
            />
            <button onClick={addMessage}>Submit</button>
        </div>
    );
};

export default MessageInput;
