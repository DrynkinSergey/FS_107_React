import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <div className={s.flex}>
          <button onClick={handleDecreaseCounter} className='btn'>
            minus
          </button>
          <button onClick={handleReset} className='btn'>
            reset
          </button>
          <button onClick={handleIncreaseCounter} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
