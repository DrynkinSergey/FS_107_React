import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Users from './pages/Users/Users';
import UserDetails from './pages/UserDetails/UserDetails';
import PostsByUser from './components/PostsByUser/PostsByUser';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />}>
          <Route path='info' element={<h2>lorem ipsum</h2>} />
          <Route path='posts' element={<PostsByUser />}>
            <Route path=':postId/details' element={<PostDetails />} />
          </Route>
        </Route>
        {/* users/24/info */}
        {/* users/24/posts */}
        {/*Якщо роут не підійшов - переведе на сторінку 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
