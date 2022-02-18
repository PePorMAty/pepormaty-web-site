import s from "../MyPosts.module.css";

const Post6 = () =>{
  return (
    <div>
      <div className={s.post__item}>
        <img className={s.post__profileImg} src="https://sun9-55.userapi.com/impg/8gZjuUJWCu13usvEus7XI76dw7-GRd7Gt8CyYQ/mSCfrVQ55Ts.jpg?size=328x263&quality=96&sign=4e6902bbd20713bd5d72f472964d975d&type=album" />
        <div className={s.post__title}>
          <p>Мария Ильиных обновила фотографию на странице:</p>
          <p>27 авг 2020</p>
          <img className={s.post__itemImg} src="https://sun9-11.userapi.com/impg/kMUJIlHHDqcR0ObWxaYF7TKhqNjks5YlrK9ccw/tuSYdo59YX0.jpg?size=2160x2160&quality=96&sign=ca6c68bb952665adf65342f1330938a1&type=album" />
        </div>
      </div>
    </div>
  );
}
export default Post6;