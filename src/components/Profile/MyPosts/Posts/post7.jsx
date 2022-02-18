import s from "../MyPosts.module.css";

const Post7 = () =>{
  return (
    <div>
      <div className={s.post__item}>
        <img className={s.post__profileImg} src="https://sun9-55.userapi.com/impg/8gZjuUJWCu13usvEus7XI76dw7-GRd7Gt8CyYQ/mSCfrVQ55Ts.jpg?size=328x263&quality=96&sign=4e6902bbd20713bd5d72f472964d975d&type=album" />
        <div className={s.post__title}>
          <p>Мария Ильиных обновила фотографию на странице:</p>
          <p>15 июн 2020</p>
          <img className={s.post__itemImg} src="https://sun9-84.userapi.com/impg/B34f0I1kIjbdXHg2cfbmlmey6mJYNW0jyD2U0A/2n1qEj5L50s.jpg?size=1619x2160&quality=96&sign=e1746b04f0c94b535d23099cfb36e3d6&type=album" />
        </div>
      </div>
    </div>
  );
}
export default Post7;