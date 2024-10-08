import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTodoThunk, deleteTodoThunk, fetchTodos, toggleTodoThunk } from './tasksOps';

const initialState = {
  items: [],
  searchStr: '',
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'tasks',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTodoThunk.fulfilled, (state, action) => {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

        state.items[itemIndex].completed = !state.items[itemIndex].completed;
      })

      .addMatcher(isAnyOf(fetchTodos.pending, deleteTodoThunk.pending, addTodoThunk.pending, toggleTodoThunk.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchTodos.fulfilled, deleteTodoThunk.fulfilled, addTodoThunk.fulfilled, toggleTodoThunk.fulfilled), (state, action) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchTodos.rejected, deleteTodoThunk.rejected, addTodoThunk.rejected, toggleTodoThunk.rejected), (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const tasksReducer = slice.reducer;

export const selectTasks = state => state.tasks.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectIsError = state => state.tasks.isError;
