import { useContext, useState } from 'react';
import Header from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { authContext } from './context/AuthProvider';
import { Login } from './components/Login/Login';
import Modal from './components/Modal/Modal';
import { useToggle } from './hooks/useToggle';

const App = () => {
  const { user } = useContext(authContext);

  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);
  const { isOpen, openModal, closeModal } = useToggle();

  if (!user) {
    return <Login />;
  }
  return (
    <div>
      <Header />
      <TodoList />
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsam velit dicta enim ad architecto aspernatur tempore nobis quod libero
            placeat fugit laudantium repellendus neque, cum pariatur adipisci laboriosam. Recusandae.
          </h2>
        </Modal>
      )}
    </div>
  );
};
export default App;
