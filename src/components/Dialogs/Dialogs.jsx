import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props) => (
    <div className="dialog">
        <NavLink className={style.dialog__item} to={"/dialogs/" + props.id}>
            {props.name}
        </NavLink>
    </div>
);

const Dialogs = () => {
    return (
        <div className={style.dialogs_wrapper}>
            <header className={style.header}>
                <h1>Dialogs</h1>
            </header>
            <div className={style.dialogs}>
                <DialogItem name="Artur" id="1" />
                <DialogItem name="Alex" id="2" />
                <DialogItem name="Dmitriy" id="3" />
                <DialogItem name="Fedor" id="4" />
                <DialogItem name="Evgeniy" id="5" />
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
