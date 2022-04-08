import s from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import DialogMessage from "./DialogMessage/DialogMessage.jsx";

let dialogs = [
  { id: 1, name: 'Anton' },
  { id: 2, name: 'Liza' },
  { id: 3, name: 'Alina' },
  { id: 4, name: 'Lena' },
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Good' },
]

let dialogsElements = dialogs
  .map(dialog => <div className={s.item}><DialogItem name={dialog.name}
    id={dialog.id} /></div>)
let messagesElements = messages
  .map(message => <DialogMessage message={message.message} />)    


const Messages = (props) => {
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
