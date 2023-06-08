import style from "./Sidebar.module.css";
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
    return (
        <>
            <div className={style.wrapper}>
                <h1 className={style.header}>Friends</h1>
            </div>
            <div className={style.friends}>
                {props.sidebar.friends.map((friend) => {
                    return <Friend name={friend.name} ava={friend.ava} />;
                })}
            </div>
        </>
    );
};

export default Sidebar;
