import { useEffect, useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
import { nanoid } from 'nanoid';
import Modal from '../Modal/Modal';
import { useToggle } from '../../hooks/useToggle';
export const TodoList = () => {
  const { isOpen, openModal, closeModal } = useToggle();

  const [todos, setTodos] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem('todos'));
    if (savedData?.length) {
      return savedData;
    }
    return todosData;
  });

  const [newTodoValue, setNewTodoValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  const handleAddTodo = () => {
    const newTodo = { todo: newTodoValue, id: nanoid() };
    setTodos(prev => [...prev, newTodo]);
    setNewTodoValue('');
  };
  return (
    <>
      <div className='flex'>
        <input value={newTodoValue} onChange={e => setNewTodoValue(e.target.value)} className={s.input} />
        <button onClick={handleAddTodo} className='btn border'>
          Add
        </button>
      </div>
      <button onClick={openModal}>OPEN THIRD MODAL</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit placeat modi sint. Alias quod, vel molestias ab doloribus consectetur
          est voluptas sequi facere iure, rem ut illo dolore molestiae!
        </Modal>
      )}
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </>
  );
};
