import s from './List.module.css';
const List = ({ data, title }) => {
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {data.map(film => (
          <li className={s.item} key={film.id}>
            {film.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
