import style from "./Posts.module.css";
import Post from "./Post/Post.jsx";

const Posts = (props) => {
  return (
    <div className={style.posts}>
      <p>My posts</p>
      <div className={style.addPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      {props.postsData.map((post) => (
        <Post text={post.text} likesCount={post.likesCount} />
      ))}
    </div>
  );
};

export default Posts;
