import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props) => (
    <div className="dialog">
        <NavLink className={style.dialog__item} to={"/dialogs/" + props.id}>
            {props.name}
        </NavLink>
    </div>
);

const Message = (props) => <p>{props.message}</p>;

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
                <Message message="Message" />
                <Message message="Message" />
                <Message message="Message" />
                <Message message="Message" />
                <Message message="Message" />
            </div>
        </div>
    );
};

export default Dialogs;
