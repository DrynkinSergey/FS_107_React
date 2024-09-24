import { Link } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
  return (
    <div className={s.wrapper}>
      <div>Routing</div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
};
export default Header;
