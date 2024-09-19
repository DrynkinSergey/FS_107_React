import { useContext } from 'react';
import s from './Header.module.css';
import { authContext } from '../../context/AuthProvider';
import { langContext } from '../../context/LangProvider';
const Header = () => {
  const { user, logout } = useContext(authContext);
  const { changeLang, vocabulary, lang } = useContext(langContext);
  return (
    <div className={s.wrapper}>
      <div>LOGO</div>
      <h2>
        {vocabulary.hello}
        {user}
      </h2>
      <select value={lang} onChange={e => changeLang(e.target.value)} name='' id=''>
        <option value='ukr'>Ukrainian</option>
        <option value='eng'>English</option>
      </select>
      <button onClick={logout}>Exit</button>
    </div>
  );
};
export default Header;
