import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredData, selectFilteredDataMemo } from '../../redux/taskSlice';
import { selectSearchStr } from '../../redux/searchSlice';
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/tasksOps';

export const List = () => {
  const tasks = useSelector(selectFilteredDataMemo);
  const searchStr = useSelector(selectSearchStr);
  const sortedData = tasks.filter(task => task.todo.toLowerCase().trim().includes(searchStr.toLowerCase().trim()));
  const dispatch = useDispatch();

  return (
    <ul className='flex flex-col gap-4'>
      {sortedData.map(item => (
        <li className='flex items-center justify-between border-2 border-black p-4 rounded-md' key={item.id}>
          <input type='checkbox' checked={item.completed} onChange={() => dispatch(toggleTodoThunk(item))} />
          <p>{item.todo}</p>
          <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
