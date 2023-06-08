import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";
import ava1 from "../../../redux/ava1.jpg";
const DialogItem = (props) => (
    <div className={style.container}>
        <div
            className={style.ava}
            style={{ background: `url(${ava1}) center/cover` }}
        ></div>
        <div className="dialog">
            <NavLink className={style.dialog__item} to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    </div>
);

export default DialogItem;
