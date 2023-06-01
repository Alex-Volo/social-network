import mainImage from "./main-top.jpg";
import avatar from "./avatar.png";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={style.profile}>
      <header className={style.header}>
        <img className={style.headerImg} src={mainImage} alt="profile" />
      </header>
      <div className={style.content}>
        <div className={style.author}>
          <img className={style.avatar} src={avatar} alt="author avatar" />
          <div className={style.description}>Описание юзера</div>
        </div>
        <div className={style.posts}>
          <p>My posts</p>
          <div className={style.addPost}>
            Инпут для нового поста и кнопка создать
          </div>
          <div className={style.post}>Пост 1</div>
          <div className={style.post}>Пост 2</div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
