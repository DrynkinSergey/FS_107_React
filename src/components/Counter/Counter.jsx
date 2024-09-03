import s from './Counter.module.css';

export const Counter = () => {
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button className='btn'>minus</button>
          <button className='btn'>reset</button>
          <button className='btn'>plus</button>
        </div>
      </div>
    </div>
  );
};
