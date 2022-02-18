import s from "../MyPosts.module.css";

const Post5 = () =>{
  return (
    <div>
      <div className={s.post__item}>
        <img className={s.post__profileImg} src="https://sun9-55.userapi.com/impg/8gZjuUJWCu13usvEus7XI76dw7-GRd7Gt8CyYQ/mSCfrVQ55Ts.jpg?size=328x263&quality=96&sign=4e6902bbd20713bd5d72f472964d975d&type=album" />
        <div className={s.post__title}>
          <p>Мария Ильиных обновила фотографию на странице:</p>
          <p>19 янв 2021</p>
          <img className={s.post__itemImg} src="https://sun9-7.userapi.com/impg/9cXaR1XvW2qIuBKu-LpuJVfRpR-2Cm2X8Ywbew/nX6wJ9CyC5M.jpg?size=1806x2160&quality=96&sign=bada3a7514adf158d37af9a0af82245e&type=album" />
        </div>
      </div>
    </div>
  );
}
export default Post5;