import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import List from './components/List/List';
import Message from './components/Message/Message';
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

      <p>Супер форум</p>
      <Message author='Petro' message='Продам диван!' />
      <Message message='Whatsup' />
      <List title='Films' data={filmsData} />
      <List title='Goods' data={goodsData} />
    </>
  );
};
export default App;
