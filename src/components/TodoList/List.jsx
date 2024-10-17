import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredData, selectFilteredDataMemo } from '../../redux/taskSlice';
import { selectSearchStr } from '../../redux/searchSlice';
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/tasksOps';
import { AnimatePresence, motion } from 'framer-motion';
import { slideInFromBot, slideInFromLeft, slideInFromRight } from '../../motion/motion';
export const List = () => {
  const tasks = useSelector(selectFilteredDataMemo);
  const searchStr = useSelector(selectSearchStr);
  const sortedData = tasks.filter(task => task.text.toLowerCase().trim().includes(searchStr.toLowerCase().trim()));
  const dispatch = useDispatch();

  return (
    <ul className='flex flex-col gap-4'>
      <AnimatePresence>
        {sortedData.map((item, idx) => (
          <motion.li
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={idx % 2 === 0 ? slideInFromRight(idx * 0.4) : slideInFromBot(idx * 0.4)}
            className='flex items-center justify-between border-2 border-black p-4 rounded-md'
            key={item.id}
          >
            <input type='checkbox' checked={item.completed} onChange={() => dispatch(toggleTodoThunk(item))} />
            <p>{item.text}</p>
            <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};
