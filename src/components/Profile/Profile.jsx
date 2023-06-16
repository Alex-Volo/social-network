import mainImage from "./main-top.jpg";
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = () => {
  return (
    <>
      <header className={style.header}>
        <img className={style.headerImg} src={mainImage} alt="profile" />
      </header>
      <div className={style.content}>
        <ProfileInfo />
        <PostsContainer />
      </div>
    </>
  );
};

export default Profile;
