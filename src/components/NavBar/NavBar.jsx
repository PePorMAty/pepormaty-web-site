import s from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.nav__menu}>
        <div className={s.nav__item}>
          <a className={s.nav__itemLink} href="#">Profile</a>
        </div>
        <div className={s.nav__item}>
          <a className={s.nav__itemLink} href="#">Messages</a>
        </div>
        <div className={s.nav__item}>
          <a className={s.nav__itemLink} href="#">News</a>
        </div>
        <div className={s.nav__item}>
          <a className={s.nav__itemLink} href="#">Music</a>
        </div>
        <div className={s.nav__item}>
          <a className={s.nav__itemLink} href="#"><span>Settings</span></a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;