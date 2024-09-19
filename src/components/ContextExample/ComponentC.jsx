import { useContext } from 'react';
import { userContext } from '../../App';

const ComponentC = ({ auto }) => {
  const context = useContext(userContext);
  return (
    <div>
      ComponentC - TARGET
      <h1>Auto: {auto}</h1>
      <h2>Model: {context.model}</h2>
      <h2>Engine: {context.engine}</h2>
    </div>
  );
};
export default ComponentC;
