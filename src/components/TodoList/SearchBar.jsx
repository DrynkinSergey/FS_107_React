import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { changeSearch } from '../../redux/searchSlice';
export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapperSearch}>
      <input type='text' placeholder='Search...' onChange={e => dispatch(changeSearch(e.target.value))} />
    </div>
  );
};
