import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";

const DialogItem = (props) =>{
  
  return (
    <div className={s.item + ' ' + s.active}>
      <NavLink className={s.itemLink} to={props.id}>{props.name}</NavLink>
    </div>
  );
}
const DialogMessage = (props) => {

  return (
    <div>
    <div className={s.message__item}>{props.message}</div>
    </div>
  );
}

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.bg}>
        <div className={s.dialogs__item}>
          <DialogItem name="Anton" id="1" />
          <div className={s.item}>
            <DialogItem name="Liza" id="2" />
          </div>
          <div className={s.item}>
            <DialogItem name="Alina" id="3" />
          </div>
          <div className={s.item}>
            <DialogItem name="Lena" id="4" />
          </div>
        </div>
      </div>
      <div className={s.bg}>
        <div className={s.messages}>
          <DialogMessage message="Hi" />
          <DialogMessage message="How are you?" />
          <DialogMessage message="Good" />
        </div>
      </div>
    </div>
  );
}
export default Messages;
