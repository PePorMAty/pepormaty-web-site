import s from "./Header.module.css";
const Header = () =>{
  return (
    <header className={s.header}>
      <div className={s.bg}>
      <img className={s.logo} src="https://png-library.net/images/8cx8ELjEi.png" />
      </div>
    </header>
  );
}
export default Header;