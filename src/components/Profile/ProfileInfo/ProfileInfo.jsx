import avatar from "../avatar.png";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={style.author}>
            <img className={style.avatar} src={avatar} alt="author avatar" />
            <div className={style.description}>Описание юзера</div>
        </div>
    );
};

export default ProfileInfo;
