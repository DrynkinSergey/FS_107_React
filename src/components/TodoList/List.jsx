import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredData } from '../../redux/taskSlice';
import s from './TodoList.module.css';
import { selectSearchStr } from '../../redux/searchSlice';
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/tasksOps';

export const List = () => {
  const tasks = useSelector(selectFilteredData);
  const searchStr = useSelector(selectSearchStr);
  const sortedData = tasks.filter(task => task.todo.toLowerCase().trim().includes(searchStr.toLowerCase().trim()));

  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {sortedData.map(item => (
        <li className={s.item} key={item.id}>
          <input type='checkbox' checked={item.completed} onChange={() => dispatch(toggleTodoThunk(item))} />
          <p>{item.todo}</p>
          <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
