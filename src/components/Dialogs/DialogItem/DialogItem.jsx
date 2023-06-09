import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = ({ ava, name, id }) => (
  <div className={style.container}>
    <div
      className={style.ava}
      style={{ background: `url(${ava}) center/cover` }}></div>
    <div className="dialog">
      <NavLink className={style.dialog__item} to={"/dialogs/" + id}>
        {name}
      </NavLink>
    </div>
  </div>
);

export default DialogItem;
