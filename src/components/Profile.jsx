import mainImage from "../img/main-top.jpg";
import avatar from "../img/avatar.png";

const Profile = () => {
  return (
    <main className="profile">
      <header className="profile__header">
        <img className="profile__img" src={mainImage} alt="profile" />
      </header>
      <div className="profile__content">
        <div className="profile__author">
          <img className="author__avatar" src={avatar} alt="author avatar" />
          <div className="author__description">Описание юзера</div>
        </div>
        <div className="profile__posts">
          <p>My posts</p>
          <div className="posts__new-post">
            Инпут для нового поста и кнопка создать
          </div>
          <div className="post1">Пост 1</div>
          <div className="post2">Пост 2</div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
