import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={style.dialogs_wrapper}>
      <header className={style.header}>
        <h1>Dialogs</h1>
      </header>
      <div className={style.dialogs}>
        <div className="dialog">
          <NavLink className={style.dialog__name} to="/dialogs/1">
            Artur
          </NavLink>
        </div>
        <div className="dialog">
          <NavLink className={style.dialog__name} to="/dialogs/2">
            Alex
          </NavLink>
        </div>
        <div className="dialog">
          <NavLink className={style.dialog__name} to="/dialogs/3">
            Dmitriy
          </NavLink>
        </div>
        <div className="dialog">
          <NavLink className={style.dialog__name} to="/dialogs/4">
            Fedor
          </NavLink>
        </div>
        <div className="dialog">
          <NavLink className={style.dialog__name} to="/dialogs/5">
            Evgeniy
          </NavLink>
        </div>
      </div>

      <div className="messages">
        <p>Message 1</p>
        <p>Message 2</p>
        <p>Message 3</p>
        <p>Message 4</p>
        <p>Message 5</p>
      </div>
    </div>
  );
};

export default Dialogs;
