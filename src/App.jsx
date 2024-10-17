import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from './redux/auth/operations';
import { useEffect } from 'react';
import { selectIsRefreshing } from './redux/auth/selectors';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  // Коли людина заходить до нас в додаток, редакс виконує запит на сервер для отримання інформації про користувача
  // Це відбувається автоматично за допомогою useEffect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? null : (
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='tasks' element={<PrivateRoute component={<Tasks />} redirectTo='/login' />} />
        </Route>
        <Route path='register' element={<RestrictedRoute component={<Register />} redirectTo='/tasks' />} />
        <Route path='login' element={<RestrictedRoute component={<Login />} redirectTo='/tasks' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
export default App;
