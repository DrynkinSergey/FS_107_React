import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/*Якщо роут не підійшов - переведе на сторінку 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
