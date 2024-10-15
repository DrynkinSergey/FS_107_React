import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.wrapper}>
      <div>Auth</div>
      <div>Welcome, John</div>
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/'>
          Tasks
        </NavLink>
        <NavLink className={buildLinkClass} to='/'>
          Login
        </NavLink>
        <NavLink className={buildLinkClass} to='/'>
          Register
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
