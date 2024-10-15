import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice';
import { searchFilterReducer } from './searchSlice';
import { filterReducer } from './filterSlice';
import { authSlice } from './auth/slice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    searchFilter: searchFilterReducer,
    filter: filterReducer,
    auth: authSlice,
  },
});
