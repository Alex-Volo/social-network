import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
                {dialogsData.map((dia) => (
                    <DialogItem name={dia.name} id={dia.id} />
                ))}
            </div>
            <div ClassName="messages">
                {messagesData.map((mes) => (
                    <Message message={mes.message} />
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
