import style from "./Users.module.css";
import React from "react";
import User from "./User/User";

const Users = ({ usersData, follow, unfollow }) => {
    const userElements = usersData.users.map((user) => (
        <User follow={follow} unfollow={unfollow} key={user.id} user={user} />
    ));
    return <div className={style.users}>{userElements}</div>;
};

export default Users;
