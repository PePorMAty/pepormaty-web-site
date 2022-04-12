import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  
  let dialogsElements = props.posts
    .map(dialog => <Post title={dialog.text} id={dialog.id} img={dialog.img} preTitle={dialog.postData} /> );

  let newPostElement = React.createRef();


  function addPost() {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }


  return (
    <div>
      <div className={s.bg}>
        <div className={s.content__formName}>My posts</div>
        <form className={s.content__form}>
          <textarea ref={newPostElement} className={s.content__formArea} placeholder="New post..."></textarea>
          <button onClick={ addPost } className={s.content__formBtn} type="button" >Send</button>
        </form>
      </div>
      <div className={s.posts}>
          { dialogsElements }
      </div>
    </div>
  );
}
export default MyPosts;