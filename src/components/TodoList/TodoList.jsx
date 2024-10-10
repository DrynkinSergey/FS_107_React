import { useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { selectIsError, selectIsLoading, selectUncompletedTodos } from '../../redux/taskSlice';
import Filter from './Filter';
export const TodoList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const uncompletedTodos = useSelector(selectUncompletedTodos);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <Filter />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}
      <h2>Uncompleted tasks: {uncompletedTodos}</h2>
      <List />
    </div>
  );
};
