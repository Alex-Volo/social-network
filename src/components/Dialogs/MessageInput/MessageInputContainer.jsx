import MessageInput from "./MessageInput";
import React from "react";
import {
    addMessageActionCreator,
    updateMessageActionCreator,
} from "../../../redux/dialogs-reducer";

const MessageInputContainer = ({ dispatch, dialogsState }) => {
    const addMessage = () => {
        dispatch(addMessageActionCreator());
    };
    const sendChanges = (text) => {
        dispatch(updateMessageActionCreator(text));
    };

    return (
        <MessageInput
            dialogsState={dialogsState}
            addMessage={addMessage}
            sendChanges={sendChanges}
        />
    );
};

export default MessageInputContainer;
