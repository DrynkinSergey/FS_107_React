import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, selectSearchStr, selectTasks } from '../../redux/taskSlice';
import s from './TodoList.module.css';

export const List = () => {
  const tasks = useSelector(selectTasks);
  const searchStr = useSelector(selectSearchStr);
  const filteredData = tasks.filter(task => task.todo.toLowerCase().trim().includes(searchStr.toLowerCase().trim()));
  const dispatch = useDispatch();
  return (
    <ul className={s.list}>
      {filteredData.map(item => (
        <li className={s.item} key={item.id}>
          <input type='checkbox' />
          <p>{item.todo}</p>
          <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
