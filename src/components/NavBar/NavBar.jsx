import "./NavBar.css"
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <div className="nav__item">
          <a className="nav__item-link" href="#">Profile</a>
        </div>
        <div className="nav__item">
          <a className="nav__item-link" href="#">Messages</a>
        </div>
        <div className="nav__item">
          <a className="nav__item-link" href="#">News</a>
        </div>
        <div className="nav__item">
          <a className="nav__item-link" href="#">Music</a>
        </div>
        <div className="nav__item">
          <a className="nav__item-link" href="#"><span>Settings</span></a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;