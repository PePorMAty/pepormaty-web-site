import s from "../MyPosts.module.css";

const Post4 = () =>{
  return (
    <div>
      <div className={s.post__item}>
        <img className={s.post__profileImg} src="https://sun9-55.userapi.com/impg/8gZjuUJWCu13usvEus7XI76dw7-GRd7Gt8CyYQ/mSCfrVQ55Ts.jpg?size=328x263&quality=96&sign=4e6902bbd20713bd5d72f472964d975d&type=album" />
        <div className={s.post__title}>
          <p>Мария Ильиных обновила фотографию на странице:</p>
          <p>9 апр 2021</p>
          <img className={s.post__itemImg} src="https://sun9-54.userapi.com/impg/2v9jKC-nO-a4O2SUI-mZfS61pGWMx3n52VVL7Q/iL5CHqa0n1Q.jpg?size=1681x2160&quality=96&sign=2c5ba011560e65eee826f69e1104239e&type=album" />
        </div>
      </div>
    </div>
  );
}
export default Post4;