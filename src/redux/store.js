import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice';
import { searchFilterReducer } from './searchSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    searchFilter: searchFilterReducer,
    filter: filterReducer,
  },
});
