import mainImage from "./main-top.jpg";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = ({profilePage, addPost, transmitText }) => {

  return (
    <>
      <header className={style.header}>
        <img className={style.headerImg} src={mainImage} alt="profile" />
      </header>
      <div className={style.content}>
        <ProfileInfo />
        <Posts postsData={profilePage.postsData} textareaValue={profilePage.textareaValue} addPost={addPost} transmitText={transmitText} />
      </div>
    </>
  );
};

export default Profile;
