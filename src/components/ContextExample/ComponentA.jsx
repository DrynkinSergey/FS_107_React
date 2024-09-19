import ComponentB from './ComponentB';

const ComponentA = ({ auto }) => {
  return (
    <div>
      Component A
      <ComponentB auto={auto} />
    </div>
  );
};
export default ComponentA;
