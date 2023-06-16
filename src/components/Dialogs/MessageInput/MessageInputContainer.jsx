import MessageInput from "./MessageInput";
import React, { useContext } from "react";
import {
  addMessageActionCreator,
  updateMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";

const MessageInputContainer = () => {
  const storeContext = useContext(StoreContext);

  const addMessage = () => {
    storeContext.dispatch(addMessageActionCreator());
  };
  const sendChanges = (text) => {
    storeContext.dispatch(updateMessageActionCreator(text));
  };

  return (
    <MessageInput
      dialogsState={storeContext.getState().dialogsPage}
      addMessage={addMessage}
      sendChanges={sendChanges}
    />
  );
};

export default MessageInputContainer;
