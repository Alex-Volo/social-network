import style from "./Posts.module.css";
import Post from "./Post/Post.jsx";

const Profile = () => {
    return (
        <div className={style.posts}>
            <p>My posts</p>
            <div className={style.addPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Profile;
