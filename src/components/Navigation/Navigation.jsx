import style from "./Navigation.module.css";
// import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a className={`${style.item} ${style.active}`} href="# ">
            Profile
          </a>
        </li>
        <li>
          <a className={style.item} href="# ">
            Messages
          </a>
        </li>
        <li>
          <a className={style.item} href="# ">
            News
          </a>
        </li>
        <li>
          <a className={style.item} href="# ">
            Music
          </a>
        </li>
        <li>
          <a className={style.item} href="# ">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
