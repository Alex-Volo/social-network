import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = ({ ava, name, id }) => {
  const checkClass = ({ isActive }) =>
        isActive ? style.dialog__item_active : style.dialog__item;
  return (<div className={style.container}>
    <div
      className={style.ava}
      style={{ background: `url(${ava}) center/cover` }}></div>
    <div className="dialog">
      <NavLink className={checkClass} to={"/dialogs/" + id}>
        {name}
      </NavLink>
    </div>
  </div>
)};

export default DialogItem;
