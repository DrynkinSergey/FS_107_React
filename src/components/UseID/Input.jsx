import { useId } from 'react';

const Input = () => {
  const megaSuperID = useId();
  return (
    <div>
      <label htmlFor={megaSuperID}>MY TEXT LABEL FOR INPUT</label>
      <input id={megaSuperID} placeholder='Enter value...' />
    </div>
  );
};
export default Input;
