import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, selectTasks } from '../../redux/taskSlice';

export const List = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <ul>
      {tasks.map(item => (
        <li key={item.id}>
          <p>{item.todo}</p>
          <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
