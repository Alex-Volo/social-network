import style from "./Posts.module.css";

const Profile = () => {
    return (
        <div className={style.posts}>
            <p>My posts</p>
            <div className={style.addPost}>
                Инпут для нового поста и кнопка создать
            </div>
            <div className={style.post}>Пост 1</div>
            <div className={style.post}>Пост 2</div>
        </div>
    );
};

export default Profile;
