import "./Profile.css"
import MyPosts from "./MyPosts/MyPosts";
import Info from "./Info/Info";
const Profile = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <img className="content__img" src="https://pbs.twimg.com/profile_banners/352167265/1443363952/1500x500" />
          <div className="content__userProfile">
            <img className="userProfile__img" src="https://sun9-3.userapi.com/impg/dt-R-jUDMSbVDuVVdQZRie9X7h4VS0JCt_cr6w/E4lKWJtgteQ.jpg?size=1620x2160&quality=96&sign=7c7e0fb46c7f4a1f584b2866af64b4ff&type=album" />
            <Info />
          </div>
        </div>
      </div>
      <MyPosts />
    </div>
  );
}
export default Profile;