import s from "../MyPosts.module.css";

const Post2 = () =>{
  return (
    <div>
      <div className={s.post__item}>
        <img className={s.post__profileImg} src="https://sun9-55.userapi.com/impg/8gZjuUJWCu13usvEus7XI76dw7-GRd7Gt8CyYQ/mSCfrVQ55Ts.jpg?size=328x263&quality=96&sign=4e6902bbd20713bd5d72f472964d975d&type=album" />
        <div className={s.post__title}>
          <p>Мария Ильиных обновила фотографию на странице:</p>
          <p>30 июн 2021</p>
          <img className={s.post__itemImg} src="https://sun9-22.userapi.com/impg/XZkKDndF8coBY9qcT7u8HHwDu_uBWwM3bs99Ew/R00fwceMSLs.jpg?size=2160x2160&quality=96&sign=71db53928a0d4cfa731d91ec44654b0d&type=album" />
        </div>
      </div>
    </div>
  );
}
export default Post2;