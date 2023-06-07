import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs_wrapper}>
            <header className={style.header}>
                <h1>Dialogs</h1>
            </header>
            <div className={style.dialogs}>
                {props.dialogsData.map((dia) => (
                    <DialogItem name={dia.name} id={dia.id} />
                ))}
            </div>
            <div ClassName="messages">
                {props.messagesData.map((mes) => (
                    <Message message={mes.message} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
