import { Component } from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
import img4 from "../../../images/img4.jpg";
import img5 from "../../../images/img5.jpg";
import img6 from "../../../images/img6.jpg";


const MyPosts = () => {
  
  let postsText = [
    { id: 1, text: 'Мария Ильиных обновила фотографию на странице:', img: img1, postData: '27 сен 2021' },
    { id: 2, text: 'Мария Ильиных обновила фотографию на странице:', img: img2, postData: '30 июн 2021' },
    { id: 3, text: 'Отправляю свою мечту в капсулу времени 👽 Налаживайте контакт между временными континуумами здесь: https://vk.cc/c3iYfH' },
    { id: 4, text: 'Мария Ильиных обновила фотографию на странице:', img: img3, postData: '9 апр 2021'},
    { id: 5, text: 'Мария Ильиных обновила фотографию на странице:', img: img4, postData: '19 янв 2021'},
    { id: 6, text: 'Мария Ильиных обновила фотографию на странице:', img: img5, postData: '27 авг 2020'},
    { id: 7, text: 'Мария Ильиных обновила фотографию на странице:', img: img6, postData: '15 июн 2020'},
  ]

  let dialogsElements = postsText
    .map(dialog => <Post title={dialog.text} id={dialog.id} img={dialog.img} preTitle={dialog.postData} /> );
    
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
          { dialogsElements }
      </div>
    </div>
  );
}
export default MyPosts;