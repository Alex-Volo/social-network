import style from "./MessageInput.module.css";
import React from "react";

const MessageInput = (props) => {
  const inputRef = React.createRef();
  const addMessage = () => {
    const text = inputRef.current.value;
    alert(text);
  };

  return (
    <div className={style.messageInputContainer}>
      <input ref={inputRef} className={style.input} type="text" />
      <button onClick={addMessage}>Submit</button>
    </div>
  );
};

export default MessageInput;
