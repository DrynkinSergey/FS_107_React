import FormObject from './components/Forms/FormObject';

const App = () => {
  const registerNewSuperUser = data => {
    console.log('Data was received!');
    setTimeout(() => {
      console.log('Start register process...');
    }, 1000);
    setTimeout(() => {
      console.log('Register is done! 🚀');
      console.log(data);
    }, 2000);
  };
  return (
    <div>
      <FormObject registerNewSuperUser={registerNewSuperUser} />
    </div>
  );
};
export default App;
