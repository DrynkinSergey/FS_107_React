import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [{ todo: ' Hello world', id: 1, completed: false }],
  searchStr: '',
};

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    deleteTask: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const selectTasks = state => state.tasks.items;
export const selectSearchStr = state => state.tasks.searchStr;

export const tasksReducer = slice.reducer;
export const { deleteTask } = slice.actions;
