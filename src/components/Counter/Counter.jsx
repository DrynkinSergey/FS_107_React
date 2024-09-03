import s from './Counter.module.css';

export const Counter = () => {
  const greetings = event => {
    console.log('Hello, Developer!');
    console.log('We learn React!');
    console.log(event);
  };

  const getAge = age => {
    console.log(`Now you ${age} old`);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button onClick={greetings} className='btn'>
            minus
          </button>
          <button onClick={() => getAge(51)} className='btn'>
            reset
          </button>
          <button onClick={() => console.log('hello world')} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
