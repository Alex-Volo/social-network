import mainImage from "./main-top.jpg";
import avatar from "./avatar.png";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts.jsx";

const Profile = () => {
  return (
    <>
      <header className={style.header}>
        <img className={style.headerImg} src={mainImage} alt="profile" />
      </header>
      <div className={style.content}>
        <div className={style.author}>
          <img className={style.avatar} src={avatar} alt="author avatar" />
          <div className={style.description}>Описание юзера</div>
        </div>
        <Posts />
      </div>
    </>
  );
};

export default Profile;
