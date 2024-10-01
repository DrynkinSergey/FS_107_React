import s from './Counter.module.css';

export const Counter = () => {
  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleResetClick = () => {};
  const handleChangeStep = e => {};
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <input value={1} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button className='btn' onClick={handleMinusClick}>
            minus
          </button>
          <button className='btn' onClick={handleResetClick}>
            reset
          </button>
          <button className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
