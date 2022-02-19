import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.post__item}>
          <img className={s.post__profileImg} src="https://sun9-55.userapi.com/impg/8gZjuUJWCu13usvEus7XI76dw7-GRd7Gt8CyYQ/mSCfrVQ55Ts.jpg?size=328x263&quality=96&sign=4e6902bbd20713bd5d72f472964d975d&type=album" />
          <div className={s.posts__content}>
            <div className={s.post__title}>{props.title}</div>
            <div className={s.post__href}>{props.href}</div>
            <div className={s.post__preTitle}>{props.preTitle}</div>
            <img className={s.post__itemImg} src={props.img} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;