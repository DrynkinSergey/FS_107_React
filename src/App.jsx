import { useState } from 'react';
import { Counter } from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import { TodoList } from './components/TodoList/TodoList';
import Voting from './components/Voting';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className='wrapperBG'>
      {/* <Counter /> */}
      {/* <TodoList /> */}
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <p>Продам холодильник! Ariston</p>
        </Modal>
      )}
      <Voting />
    </div>
  );
};
export default App;
