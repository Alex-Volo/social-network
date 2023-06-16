import React, { useContext } from "react";
import Posts from "./Posts";
import {
  transmitTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const PostsContainer = () => {
  const storeContext = useContext(StoreContext);
  const sendChanges = (textareaValue) => {
    storeContext.dispatch(transmitTextActionCreator(textareaValue));
  };
  const addPost = () => {
    storeContext.dispatch(addPostActionCreator());
  };

  return (
    <Posts
      postsData={storeContext.getState().profilePage.postsData}
      textareaValue={storeContext.getState().profilePage.textareaValue}
      addPost={addPost}
      sendChanges={sendChanges}
    />
  );
};

export default PostsContainer;
