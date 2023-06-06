import style from "./Posts.module.css";
import Post from "./Post/Post.jsx";

const Posts = () => {
  const postsData = [
    {text: "Пусть здесь будет текст", likesCount: 0},
    {text: "Разные посты", likesCount: 20},
    {text: "Будут лежать", likesCount: 5},
    {text: "Здесь", likesCount: 7},
  ]
  return (
    <div className={style.posts}>
      <p>My posts</p>
      <div className={style.addPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post text={postsData[0].text} likesCount={postsData[0].likesCount} />
      <Post text={postsData[1].text} likesCount={postsData[1].likesCount} />
      <Post text={postsData[2].text} likesCount={postsData[2].likesCount} />
      <Post text={postsData[3].text} likesCount={postsData[3].likesCount} />

    </div>
  );
};

export default Posts;
