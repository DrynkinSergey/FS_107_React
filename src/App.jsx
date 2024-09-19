import { createContext } from 'react';
import Parent from './components/ContextExample/Parent';
import { Counter } from './components/Counter/Counter';

export const userContext = createContext();
const App = () => {
  const auto = 'Audi';
  return (
    <div>
      <userContext.Provider value={{ model: 'RS6', engine: '5.0' }}>
        <Parent auto={auto} />
      </userContext.Provider>
    </div>
  );
};
export default App;
