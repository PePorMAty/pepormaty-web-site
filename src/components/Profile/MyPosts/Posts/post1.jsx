import s from "../MyPosts.module.css";

const Post1 = () =>{
  return (
    <div>
      <div className={s.post__item}>
        <img className={s.post__profileImg} src="https://sun9-55.userapi.com/impg/8gZjuUJWCu13usvEus7XI76dw7-GRd7Gt8CyYQ/mSCfrVQ55Ts.jpg?size=328x263&quality=96&sign=4e6902bbd20713bd5d72f472964d975d&type=album" />
        <div className={s.post__title}>
          <p>Мария Ильиных обновила фотографию на странице:</p>
          <p>27 сен 2021</p>
          <img className={s.post__itemImg} src="https://sun9-3.userapi.com/impg/dt-R-jUDMSbVDuVVdQZRie9X7h4VS0JCt_cr6w/E4lKWJtgteQ.jpg?size=1620x2160&quality=96&sign=7c7e0fb46c7f4a1f584b2866af64b4ff&type=album" />
        </div>
      </div>
    </div>
  );
}
export default Post1;