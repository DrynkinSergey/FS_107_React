import s from './Header.module.css';
const Header = () => {
  return (
    <header className='header'>
      <div className={s.title}>Logo</div>
      <ul className={s.list}>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </header>
  );
};
export default Header;
