import style from "./MessageInput.module.css";
import React from "react";
import { addMessageActionCreator } from "../../../redux/state";

const MessageInput = ({ dispatch }) => {
    const inputRef = React.createRef();
    const addMessage = () => {
        const text = inputRef.current.value;
        dispatch(addMessageActionCreator(text));
    };

    return (
        <div className={style.messageInputContainer}>
            <input ref={inputRef} className={style.input} type="text" />
            <button onClick={addMessage}>Submit</button>
        </div>
    );
};

export default MessageInput;
