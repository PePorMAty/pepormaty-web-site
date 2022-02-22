import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const nav__itemLinkActive = ({ isActive }) => isActive ? s.nav__itemLinkActive : s.nav__itemLink;

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.bg}>
        <div className={s.nav__menu}>
          <div className={s.nav__item}>
            <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/download_415634.png" />
            <NavLink className={nav__itemLinkActive} to="/profile" activeClassName={s.active}>Profile</NavLink>
          </div>
          <div className={s.nav__item}>
            <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/img_262995.png" />
            <NavLink className={nav__itemLinkActive} to="/Messages">Messages</NavLink>
          </div>
          <div className={s.nav__item}>
            <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/img_306988.png" />
            <NavLink className={nav__itemLinkActive} to="Music" activeClassName={s.active}>Music</NavLink>
          </div>
          <div className={s.nav__item}>
            <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/img_131741.png" />
            <NavLink className={nav__itemLinkActive} to="News" activeClassName={s.active}>News</NavLink>
          </div>
          <div className={s.nav__item}>
            <img className={s.link__logo} src="http://cdn.onlinewebfonts.com/svg/img_89453.png" />
            <NavLink className={nav__itemLinkActive} to="Settings" activeClassName={s.active}><span>Settings</span></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;