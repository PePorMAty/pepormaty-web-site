import React from 'react';
import s from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import DialogMessage from "./DialogMessage/DialogMessage.jsx";

const Messages = (props) => {
  
  let dialogsElements = props.state.dialogs
  .map(dialog => <div className={s.item}><DialogItem name={dialog.name} id={dialog.id} img={dialog.img} /></div>)

  let messagesElements = props.state.messages
  .map(message => <DialogMessage message={message.message} id={message.id} img={message.img} />)  

  let sendMessage = React.createRef();

  function addMessage() {
    let messageText = sendMessage.current.value;
    props.addMessage(messageText);
    sendMessage.current.value = '';
  } 
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
          <form className={s.form}>
            <textarea ref={sendMessage} placeholder="Напишите сообщение..." className={s.send__message}></textarea>
            <button onClick={addMessage} className={s.content__formBtn} type="button" >Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Messages;
