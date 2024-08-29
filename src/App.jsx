import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import Message from './components/Message/Message';
import Modal from './components/Modal/Modal';
import userData from './assets/user.json';
import Profile from './components/Profile/Profile';
import { FcBookmark } from 'react-icons/fc';
import animals from './assets/animals.webp';
const App = () => {
  const isOnline = false;
  const isLoading = false;
  const age = 33;
  const filmsData = [
    { id: '1', title: 'GOT' },
    { id: '2', title: 'Taxi' },
    { id: '23', title: 'Terminator' },
  ];
  const goodsData = [
    { id: '1', title: 'Морква' },
    { id: '2', title: 'Цибуля' },
    { id: '23', title: 'Айфон' },
    { id: '222', title: 'Тамагочі' },
  ];
  return (
    <>
      <Header />
      {isOnline && <h2>Welcome</h2>}
      {isLoading && <h2>Loading...</h2>}
      {age > 18 ? <h2>Ти диви який вимахав!</h2> : <h2>Тобі ще кашу їсти!</h2>}

      <p className='title'>
        {' '}
        <FcBookmark className='icon' /> Супер форум
      </p>
      <Message author='Petro' message='Продам диван!' />
      <Message message='Whatsup' />
      <List title='Films' data={filmsData} />
      <List title='Goods' data={goodsData} />

      <Modal>
        <h2>Здам квартиру!</h2>
        <button>Зняти</button>
      </Modal>

      <Modal title='Заголовок'>
        <h2>Ви дійсно хочете вийти?</h2>
        <button>Так</button>
        <button>Ні</button>
      </Modal>

      <Profile user={userData} />
      <img src={animals} />
    </>
  );
};
export default App;
