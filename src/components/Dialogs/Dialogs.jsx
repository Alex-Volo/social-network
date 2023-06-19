import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageInputContainer from "./MessageInput/MessageInputContainer";

const Dialogs = ({ dialogsState }) => {
    const dialogElements = dialogsState.dialogsData.map((dia) => (
        <DialogItem name={dia.name} id={dia.id} ava={dia.ava} />
    ));
    const messageElements = dialogsState.messagesData.map((mes) => (
        <Message message={mes.message} />
    ));

    return (
        <div className={style.dialogs_wrapper}>
            <header className={style.header}>
                <h1>Dialogs</h1>
            </header>
            <div className={style.dialogs}>{dialogElements}</div>
            <div className="messages">
                {messageElements}
                <MessageInputContainer />
            </div>
        </div>
    );
};

export default Dialogs;
