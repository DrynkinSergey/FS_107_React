import { useDispatch, useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { selectIsError, selectIsLoading, selectUncompletedTodos, selectUncompletedTodosMemo } from '../../redux/taskSlice';
import Filter from './Filter';
import { fetchTodos } from '../../redux/tasksOps';
import { useEffect } from 'react';
export const TodoList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const uncompletedTodos = useSelector(selectUncompletedTodosMemo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <Filter />
      {isLoading && <h2>Loading...</h2>}
      <h2>Uncompleted tasks: {uncompletedTodos}</h2>
      <List />
    </div>
  );
};
