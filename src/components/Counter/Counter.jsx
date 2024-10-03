import { useDispatch, useSelector } from 'react-redux';
import s from './Counter.module.css';
import { selectCounter, selectStep } from '../../redux/counter/selectors';

import { increment, changeStep, decrement, reset } from '../../redux/counterSlice.js';
export const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch(increment());
  };
  const handleMinusClick = () => {
    if (counter > 0) {
      dispatch(decrement());
    }
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleChangeStep = e => {
    dispatch(changeStep(+e.target.value));
  };
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
