import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = (props) => (
    <div className="dialog">
        <NavLink className={style.dialog__item} to={"/dialogs/" + props.id}>
            {props.name}
        </NavLink>
    </div>
);

export default DialogItem;
