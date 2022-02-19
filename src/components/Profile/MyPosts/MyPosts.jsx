import { Component } from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
const MyPosts = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.content__formName}>My posts</div>
        <form className={s.content__form}>
          <textarea className={s.content__formArea} placeholder="New post..."></textarea>
          <button className={s.content__formBtn} type="submit">Send</button>
        </form>
      </div>
      <div className={s.posts}>
        {/* //1 */}
        <Post title="Мария Ильиных обновила фотографию на странице:"
          img="https://sun9-3.userapi.com/impg/dt-R-jUDMSbVDuVVdQZRie9X7h4VS0JCt_cr6w/E4lKWJtgteQ.jpg?size=1620x2160&quality=96&sign=7c7e0fb46c7f4a1f584b2866af64b4ff&type=album"
          preTitle="27 сен 2021" />
        {/* //2 */}
        <Post title="Мария Ильиных обновила фотографию на странице:"
          img="https://sun9-22.userapi.com/impg/XZkKDndF8coBY9qcT7u8HHwDu_uBWwM3bs99Ew/R00fwceMSLs.jpg?size=2160x2160&quality=96&sign=71db53928a0d4cfa731d91ec44654b0d&type=album"
          preTitle="30 июн 2021" />
        {/* //3 */}
        <Post title="Отправляю свою мечту в капсулу времени 👽 Налаживайте контакт между временными континуумами здесь: https://vk.cc/c3iYfH" />
        {/* //4 */}
        <Post title="Мария Ильиных обновила фотографию на странице:"
          img="https://sun9-54.userapi.com/impg/2v9jKC-nO-a4O2SUI-mZfS61pGWMx3n52VVL7Q/iL5CHqa0n1Q.jpg?size=1681x2160&quality=96&sign=2c5ba011560e65eee826f69e1104239e&type=album"
          preTitle="9 апр 2021" />
        {/* //5 */}
        <Post title="Мария Ильиных обновила фотографию на странице:"
          img="https://sun9-7.userapi.com/impg/9cXaR1XvW2qIuBKu-LpuJVfRpR-2Cm2X8Ywbew/nX6wJ9CyC5M.jpg?size=1806x2160&quality=96&sign=bada3a7514adf158d37af9a0af82245e&type=album"
          preTitle="19 янв 2021" />
        {/* //6 */}
        <Post title="Мария Ильиных обновила фотографию на странице:"
          img="https://sun9-11.userapi.com/impg/kMUJIlHHDqcR0ObWxaYF7TKhqNjks5YlrK9ccw/tuSYdo59YX0.jpg?size=2160x2160&quality=96&sign=ca6c68bb952665adf65342f1330938a1&type=album"
          preTitle="27 авг 2020" />
        {/* //7 */}
        <Post title="Мария Ильиных обновила фотографию на странице:"
          img="https://sun9-84.userapi.com/impg/B34f0I1kIjbdXHg2cfbmlmey6mJYNW0jyD2U0A/2n1qEj5L50s.jpg?size=1619x2160&quality=96&sign=e1746b04f0c94b535d23099cfb36e3d6&type=album"
          preTitle="15 июн 2020" />
      </div>
    </div>
  );
}
export default MyPosts;