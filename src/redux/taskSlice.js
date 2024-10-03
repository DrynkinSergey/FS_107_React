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
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    toggleTask: (state, action) => {
      // state.items = state.items.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item));
      // const item = state.items.find(item => item.id === action.payload);
      // item.completed = !item.completed;
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      state.items[itemIndex].completed = !state.items[itemIndex].completed;
    },
  },
});

export const tasksReducer = slice.reducer;
export const { deleteTask, addTodo, toggleTask } = slice.actions;

export const selectTasks = state => state.tasks.items;
