import s from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import DialogMessage from "./DialogMessage/DialogMessage.jsx";

const Messages = (props) => {
  
  let dialogsElements = props.state.dialogs
  .map(dialog => <div className={s.item}><DialogItem name={dialog.name} id={dialog.id} img={dialog.img} /></div>)

  let messagesElements = props.state.messages
  .map(message => <DialogMessage message={message.message} id={message.id} img={message.img} />)  

  return (
    <div className={s.dialogs}>
      <div className={s.bg}>
        <div className={s.dialogs__item}>
          {dialogsElements}
        </div>
      </div>
      <div className={s.bg}>
        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
    </div>
  );
}

export default Messages;
