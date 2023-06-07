import mainImage from "./main-top.jpg";
import style from "./Profile.module.css";
import Posts from "./Posts/Posts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <>
            <header className={style.header}>
                <img
                    className={style.headerImg}
                    src={mainImage}
                    alt="profile"
                />
            </header>
            <div className={style.content}>
            <ProfileInfo />
                <Posts props={props.props}/>
            </div>
        </>
    );
};

export default Profile;
