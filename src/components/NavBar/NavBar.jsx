import s from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.bg}>
      <div className={s.nav__menu}>
        <div className={s.nav__item}>
          <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/download_415634.png" />
          <a className={s.nav__itemLink} href="#">Profile</a>
        </div>
        <div className={s.nav__item}>
          <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/img_262995.png" />
          <a className={s.nav__itemLink} href="#">Messages</a>
        </div>
        <div className={s.nav__item}>
          <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/img_131741.png" />
          <a className={s.nav__itemLink} href="#">News</a>
        </div>
        <div className={s.nav__item}>
          <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/img_306988.png" />
          <a className={s.nav__itemLink} href="#">Music</a>
        </div>
        <div className={s.nav__item}>
          <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/img_89453.png" />
          <a className={s.nav__itemLink} href="#"><span>Settings</span></a>
        </div>
      </div>
      </div>
    </nav>
  );
}
export default NavBar;