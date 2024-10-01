import { useSelector } from 'react-redux';
import s from './Counter.module.css';

export const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const step = useSelector(state => state.counter.step);

  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleResetClick = () => {};
  const handleChangeStep = e => {};
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
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
