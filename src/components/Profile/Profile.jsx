import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import Info from "./Info/Info";

const Profile = (props) => {

  return (
    <div>
      <div className={s.content__img}></div>
      <div className={s.bg}>
        <div className={s.content__userProfile}>
          <img className={`${s.userProfile__img} ${s.bgi}`} src="https://sun9-3.userapi.com/impg/dt-R-jUDMSbVDuVVdQZRie9X7h4VS0JCt_cr6w/E4lKWJtgteQ.jpg?size=1620x2160&quality=96&sign=7c7e0fb46c7f4a1f584b2866af64b4ff&type=album" />
          <Info />
        </div>
      </div>
      <MyPosts posts = {props.state} addPost={props.addPost} />
    </div>
  );
}
export default Profile;