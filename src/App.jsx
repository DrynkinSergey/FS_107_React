import { Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
