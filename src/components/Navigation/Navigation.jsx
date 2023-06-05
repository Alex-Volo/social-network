import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
// import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <NavLink className={style.item} to="/">
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink className={style.item} to="/dialogs">
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink className={style.item} to="/news">
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink className={style.item} to="/music">
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink className={style.item} to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
