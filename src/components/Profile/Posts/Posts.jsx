import style from "./Posts.module.css";
import Post from "./Post/Post.jsx";
import React from "react";

const Posts = ({ postsData, addPost }) => {
    const refTextarea = React.createRef();
    const alertValue = () => {
        const textareaValue = refTextarea.current.value;
        addPost(textareaValue);
        refTextarea.current.value = "";
    };

    return (
        <div className={style.posts}>
            <p>My posts</p>
            <div className={style.addPost}>
                <textarea ref={refTextarea}></textarea>
                <button onClick={alertValue}>Add post</button>
            </div>
            {postsData.map((post) => (
                <Post text={post.text} likesCount={post.likesCount} />
            ))}
        </div>
    );
};

export default Posts;
