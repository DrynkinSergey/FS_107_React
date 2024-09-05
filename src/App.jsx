import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Counter } from './components/Counter/Counter';
import { TodoList } from './components/TodoList/TodoList';

const App = () => {
  return (
    <div className='wrapperBG'>
      <Counter />
      <ColorPicker />
      {/* <TodoList /> */}
    </div>
  );
};
export default App;
