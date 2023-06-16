import style from "./Posts.module.css";
import Post from "./Post/Post.jsx";
import React from "react";

const Posts = ({ postsData, textareaValue, addPost, sendChanges }) => {
    const onChangeTextarea = (e) => {
        const textareaValue = e.target.value;
        sendChanges(textareaValue);
    };

    return (
        <div className={style.posts}>
            <p>My posts</p>
            <div className={style.addPost}>
                <textarea
                    onChange={onChangeTextarea}
                    value={textareaValue}
                ></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsData.map((post) => (
                <Post text={post.text} likesCount={post.likesCount} />
            ))}
        </div>
    );
};

export default Posts;
