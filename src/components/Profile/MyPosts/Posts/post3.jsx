import s from "../MyPosts.module.css";

const Post3 = () =>{
  return (
    <div>
      <div className={s.post__item}>
        <img className={s.post__profileImg} src="https://sun9-55.userapi.com/impg/8gZjuUJWCu13usvEus7XI76dw7-GRd7Gt8CyYQ/mSCfrVQ55Ts.jpg?size=328x263&quality=96&sign=4e6902bbd20713bd5d72f472964d975d&type=album" />
        <div className={s.post__title}>
          <p>Отправляю свою мечту в капсулу времени 👽 Налаживайте контакт между временными континуумами здесь:
            <a href="https://vk.cc/c3iYfH">https://vk.cc/c3iYfH</a></p>
        </div>
      </div>
    </div>
  );
}
export default Post3;