import style from "./Posts.module.css";
import Post from "./Post/Post.jsx";

const Posts = () => {
  const postsData = [
    { text: "Пусть здесь будет текст", likesCount: 0 },
    { text: "Разные посты", likesCount: 20 },
    { text: "Будут лежать", likesCount: 5 },
    { text: "Здесь", likesCount: 7 },
  ];
  return (
    <div className={style.posts}>
      <p>My posts</p>
      <div className={style.addPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      {postsData.map((post) => (
        <Post text={post.text} likesCount={post.likesCount} />
      ))}
    </div>
  );
};

export default Posts;
