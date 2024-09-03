import s from './TodoList.module.css';
export const TodoItem = ({ id, completed, todo, handleDeleteTodo }) => {
  return (
    <li className={s.item}>
      <input type='checkbox' />
      <span>{todo}</span>
      <button onClick={() => handleDeleteTodo(id)} className='btn border'>
        Delete
      </button>
    </li>
  );
};
