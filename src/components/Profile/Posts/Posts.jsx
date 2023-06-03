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
      <Post text="Пусть здесь будет текст" likesCount="0" />
      <Post text="Разные посты" likesCount="20" />
      <Post text="Будут лежать" likesCount="5" />
      <Post text="Здесь" likesCount="7" />
    </div>
  );
};

export default Profile;
