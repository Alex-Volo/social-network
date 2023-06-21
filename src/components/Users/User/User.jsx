import React from "react";
import style from "./User.module.css";

const User = ({ user, unfollow, follow }) => {
    
    return (
        <div className={style.user}>
            <div className={style.leftBlock}>
                <img className={style.ava} src={user.avatar} alt="ava" />
                <button
                    onClick={() => {
                        user.isFollow ? unfollow(user.id) : follow(user.id);
                    }}
                    className={style.btn}
                >
                    {user.isFollow ? "UNFOLLOW" : "FOLLOW"}
                </button>
            </div>
            <div className={style.infoBlock}>
                <div className={style.centerBlock}>
                    <p className={style.text}>{user.name}</p>
                    <p className={style.text}>{user.status}</p>
                </div>
                <div className={style.rightBlock}>
                    <p className={style.text}>
                        <b>{user.locate.country}</b>
                    </p>
                    <p className={style.text}>
                        <b>{user.locate.city}</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default User;
