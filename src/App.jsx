import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>} />
        <Route path='/about' element={<h1>About page</h1>} />
      </Routes>
    </>
  );
};
export default App;
