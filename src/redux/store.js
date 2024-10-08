import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice';
import { searchFilterReducer } from './searchSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    searchFilter: searchFilterReducer,
  },
});
