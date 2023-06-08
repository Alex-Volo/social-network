import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Navigation = (props) => {
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
                        Dialogs
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
            <Sidebar sidebar={props.sidebar} />
        </nav>
    );
};

export default Navigation;
