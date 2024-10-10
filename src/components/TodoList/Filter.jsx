import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { setFilterValue } from '../../redux/filterSlice';
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapperFilter}>
      <button onClick={() => dispatch(setFilterValue('all'))}>All</button>
      <button onClick={() => dispatch(setFilterValue('active'))}>Active</button>
      <button onClick={() => dispatch(setFilterValue('completed'))}>Completed</button>
    </div>
  );
};
export default Filter;
