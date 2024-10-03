import s from './TodoList.module.css';
export const SearchBar = () => {
  return (
    <div className={s.wrapperSearch}>
      <input type='text' placeholder='Search...' onChange={e => {}} />
    </div>
  );
};
