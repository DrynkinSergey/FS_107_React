import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
export const TodoList = () => {
  return (
    <>
      <div className='flex'>
        <input className={s.input} />
        <button className='btn border'>Add</button>
      </div>
      <ul className={s.list}>
        {todosData.map(item => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};
