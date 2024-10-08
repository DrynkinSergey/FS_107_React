import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://670562e3031fd46a830fc2a3.mockapi.io';

export const fetchTodos = createAsyncThunk('fetchData', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('/tasks');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkApi) => {
  try {
    const { data } = await axios.delete(`/tasks/${id}`);
    return data.id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkApi) => {
  try {
    const { data } = await axios.post('/tasks', body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const toggleTodoThunk = createAsyncThunk('toggle', async (body, thunkApi) => {
  try {
    const { data } = await axios.put(`/tasks/${body.id}`, { ...body, completed: !body.completed });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// export const fetchTodos = () => async dispatch => {
//   try {
//     dispatch(setIsLoading(true));
//     const { data } = await axios.get('/tasks');
//     dispatch(fetchDataSuccess(data));
//   } catch {
//     dispatch(setError(true));
//   }
// };

// export const deleteTodoThunk = id => async dispatch => {
//   const { data } = await axios.delete(`/tasks/${id}`);
//   dispatch(deleteTask(data.id));
// };

// export const addTodoThunk = body => async dispatch => {
//   const { data } = await axios.post(`/tasks`, body);
//   dispatch(addTodo(data));
// };
