import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { tasksReducer } from './taskSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
});
