import style from "./MessageInput.module.css";
import React from "react";
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from "../../../redux/state";

const MessageInput = ({ dispatch, dialogsState }) => {
  const inputRef = React.createRef();
  const addMessage = () => {
    const text = inputRef.current.value;
    dispatch(addMessageActionCreator(text));
  };
  const onMessageChange = (e) => {
    const text = e.target.value;
    dispatch(updateMessageActionCreator(text));
  };

  return (
    <div className={style.messageInputContainer}>
      <input
        onChange={onMessageChange}
        value={dialogsState.messageInput}
        ref={inputRef}
        className={style.input}
        type="text"
      />
      <button onClick={addMessage}>Submit</button>
    </div>
  );
};

export default MessageInput;
