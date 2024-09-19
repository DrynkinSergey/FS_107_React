import { useContext } from 'react';
import Header from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { authContext } from './context/AuthProvider';
import { Login } from './components/Login/Login';

const App = () => {
  const { user } = useContext(authContext);
  if (!user) {
    return <Login />;
  }
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
};
export default App;
