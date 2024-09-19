import ComponentC from './ComponentC';

const ComponentB = ({ auto }) => {
  return (
    <div>
      ComponentB
      <ComponentC auto={auto} />
    </div>
  );
};
export default ComponentB;
