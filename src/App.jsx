import { useDispatch } from 'react-redux';
import { TodoList } from './components/TodoList/TodoList';
import { fetchTodos } from './redux/tasksOps';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <TodoList />
    </>
  );
};
export default App;
