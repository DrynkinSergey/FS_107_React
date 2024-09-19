import { useEffect, useMemo, useRef, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [testValue, setTestValue] = useState(1);

  // console.log(btn);
  const myBtnRef = useRef();
  // console.log(myBtnRef);
  const fileRef = useRef();
  const renderCountRef = useRef(0);
  useEffect(() => {
    renderCountRef.current++;
    console.log(renderCountRef.current);
  });
  // useEffect(() => {
  //   setInterval(() => {
  //     myBtnRef.current.click();
  //   }, 100);
  // }, []);

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
  const result = useMemo(() => {
    console.log('Start calc');
    for (let i = 0; i < 100_000_0000; i++) {}
    console.log('End calc');
    return testValue * testValue;
  }, [testValue]);
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <h2>{result}</h2>
        <input type='number' value={step} onChange={e => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button onClick={handleDecreaseCounter} className='btn'>
            minus
          </button>
          <button onClick={handleReset} className='btn'>
            reset
          </button>
          <button ref={myBtnRef} id='#btn' onClick={handleIncreaseCounter} className='btn'>
            plus
          </button>
          <button onClick={() => setTestValue(prev => prev + 1)}>SET NEW TEST VALUE</button>

          <button onClick={() => fileRef.current.click()}>Open file</button>
          <input ref={fileRef} style={{ visibility: 'hidden', position: 'absolute' }} type='file' />
        </div>
      </div>
    </div>
  );
};
