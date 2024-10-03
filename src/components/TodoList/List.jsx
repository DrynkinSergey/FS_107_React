import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, selectTasks, toggleTask } from '../../redux/taskSlice';
import s from './TodoList.module.css';
import { selectSearchStr } from '../../redux/searchSlice';

export const List = () => {
  const tasks = useSelector(selectTasks);
  const searchStr = useSelector(selectSearchStr);
  const filteredData = tasks.filter(task => task.todo.toLowerCase().trim().includes(searchStr.toLowerCase().trim()));
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {filteredData.map(item => (
        <li className={s.item} key={item.id}>
          <input type='checkbox' checked={item.completed} onChange={() => dispatch(toggleTask(item.id))} />
          <p>{item.todo}</p>
          <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
