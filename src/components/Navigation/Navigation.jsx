import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Navigation = (props) => {
  const checkClass = ({ isActive }) =>
    isActive ? style.itemActive : style.item;

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink className={checkClass} to="/">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={checkClass} to="/dialogs">
            Dialogs
          </NavLink>
        </li>
        <li>
          <NavLink className={checkClass} to="/news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={checkClass} to="/music">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink className={checkClass} to="/settings">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink className={checkClass} to="/users">
            Users
          </NavLink>
        </li>
      </ul>
      <Sidebar sidebar={props.sidebar} />
    </nav>
  );
};

export default Navigation;
