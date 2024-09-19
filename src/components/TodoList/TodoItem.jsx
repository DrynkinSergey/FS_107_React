import { useContext } from 'react';
import s from './TodoList.module.css';
import { authContext } from '../../context/AuthProvider';
export const TodoItem = ({ id, completed, todo, handleDeleteTodo }) => {
  const { user } = useContext(authContext);
  return (
    <li className={s.item}>
      <input type='checkbox' />
      <span>{todo}</span>
      {user === 'admin' && (
        <button onClick={() => handleDeleteTodo(id)} className='btn border'>
          Delete
        </button>
      )}
    </li>
  );
};
