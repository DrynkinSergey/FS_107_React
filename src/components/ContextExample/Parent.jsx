import ComponentA from './ComponentA';

const Parent = ({ auto }) => {
  return (
    <div>
      Parent
      <ComponentA auto={auto} />
    </div>
  );
};
export default Parent;
