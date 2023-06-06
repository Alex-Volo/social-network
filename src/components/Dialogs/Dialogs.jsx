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
    const dialogsData = [
        { name: "Artur", id: "1" },
        { name: "Alex", id: "2" },
        { name: "Dmitriy", id: "3" },
        { name: "Fedor", id: "4" },
        { name: "Evgeniy", id: "5" },
    ];
    const messagesData = [
        { message: "Message", id: "1" },
        { message: "Message", id: "2" },
        { message: "Message", id: "3" },
        { message: "Message", id: "4" },
    ];
    return (
        <div className={style.dialogs_wrapper}>
            <header className={style.header}>
                <h1>Dialogs</h1>
            </header>
            <div className={style.dialogs}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div ClassName="messages">
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    );
};

export default Dialogs;
