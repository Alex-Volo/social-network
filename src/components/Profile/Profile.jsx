import mainImage from "./main-top.jpg";
import style from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = ({ profilePage, dispatch }) => {
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
                <PostsContainer
                    postsData={profilePage.postsData}
                    textareaValue={profilePage.textareaValue}
                    dispatch={dispatch}
                />
            </div>
        </>
    );
};

export default Profile;
