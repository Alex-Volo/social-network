import style from "./Post.module.css";
import avatar from "../../avatar.png";
// src\components\Profile\avatar.png

const Post = (props) => {
  return (
    <div className={style.post}>
      <img className={style.avatar} src={avatar} alt="Ava" />
      <div className={style.text}>
        <p>{props.text}</p>
        <p>Likes: {props.likesCount}</p>
      </div>
    </div>
  );
};

export default Post;
