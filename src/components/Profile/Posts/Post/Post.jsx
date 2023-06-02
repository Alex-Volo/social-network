import style from "./Post.module.css";
import avatar from "../../avatar.png";
// src\components\Profile\avatar.png

const Profile = () => {
    return (
        <div className={style.post}>
            <img className={style.avatar} src={avatar} alt="Ava" />
            <div className={style.text}>Пост 1</div>
        </div>
    );
};

export default Profile;
