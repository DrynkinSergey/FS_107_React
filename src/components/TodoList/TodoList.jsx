import { useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { selectIsError, selectIsLoading } from '../../redux/taskSlice';
export const TodoList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}
      <List />
    </div>
  );
};
