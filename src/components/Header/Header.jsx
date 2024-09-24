import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.wrapper}>
      <div>Routing</div>
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/about'>
          About
        </NavLink>
        <NavLink className={buildLinkClass} to='/users'>
          Users
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
