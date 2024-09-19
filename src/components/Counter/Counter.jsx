import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncreaseCounter = () => {
    setCounter(prev => prev + step);
  };

  const handleDecreaseCounter = () => {
    if (counter > 0) {
      setCounter(prev => prev - step);
    }
  };
  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input type='number' value={step} onChange={e => setStep(+e.target.value)} />
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
