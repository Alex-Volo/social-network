import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageInputContainer from "./MessageInput/MessageInputContainer";
import { useSelector } from "react-redux";

const Dialogs = () => {
    const dialogsPage = useSelector((state) => state.dialogsPage);
    const dialogElements = dialogsPage.dialogsData.map((dia) => (
        <DialogItem name={dia.name} key={dia.id} id={dia.id} ava={dia.ava} />
    ));
    const messageElements = dialogsPage.messagesData.map((mes) => (
        <Message key={mes.id} message={mes.message} />
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
