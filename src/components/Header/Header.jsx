import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.wrapper}>
      <div>Product Store</div>
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to='/'>
          Products
        </NavLink>
        <NavLink className={buildLinkClass} to='/cart'>
          Cart
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
