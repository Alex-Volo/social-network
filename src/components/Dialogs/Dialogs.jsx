import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ dialogsState }) => {
  return (
    <div className={style.dialogs_wrapper}>
      <header className={style.header}>
        <h1>Dialogs</h1>
      </header>
      <div className={style.dialogs}>
        {dialogsState.dialogsData.map((dia) => (
          <DialogItem name={dia.name} id={dia.id} ava={dia.ava} />
        ))}
      </div>
      <div className="messages">
        {dialogsState.messagesData.map((mes) => (
          <Message message={mes.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
