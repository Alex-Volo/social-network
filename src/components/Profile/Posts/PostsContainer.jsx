import React from "react";
import Posts from "./Posts";
import {
    transmitTextActionCreator,
    addPostActionCreator,
} from "../../../redux/profile-reducer";

const PostsContainer = ({ postsData, textareaValue, dispatch }) => {
    const sendChanges = (textareaValue) => {
        dispatch(transmitTextActionCreator(textareaValue));
    };
    const addPost = () => {
        dispatch(addPostActionCreator());
    };

    return (
        <Posts
            postsData={postsData}
            textareaValue={textareaValue}
            addPost={addPost}
            sendChanges={sendChanges}
        />
    );
};

export default PostsContainer;
