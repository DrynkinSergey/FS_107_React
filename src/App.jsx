import { nanoid } from 'nanoid';
import OrderForm from './components/OrderForm/OrderForm';

const App = () => {
  console.log(nanoid());

  return (
    <div>
      <OrderForm />
    </div>
  );
};
export default App;
