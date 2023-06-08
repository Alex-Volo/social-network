import style from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={style.container}>
            <div
                className={style.ava}
                style={{ background: `url(${props.ava}) center/cover` }}
            ></div>
            <div>{props.name}</div>
        </div>
    );
};

export default Friend;
