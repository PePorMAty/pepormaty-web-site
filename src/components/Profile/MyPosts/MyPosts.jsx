import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  
  let dialogsElements = props.posts
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