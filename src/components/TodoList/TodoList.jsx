import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
export const TodoList = () => {
  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <List />
    </div>
  );
};
