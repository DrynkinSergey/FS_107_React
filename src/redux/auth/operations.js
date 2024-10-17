import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://task-manager-api.goit.global'; // ❌

export const goitApi = axios.create({
  baseURL: 'https://task-manager-api.goit.global',
});

const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk('register', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post('users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('login', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post('users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await goitApi.post('users/logout');
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('refresh', async (_, thunkApi) => {
  try {
    // Отримуємо збережений токен з локал стореджа
    const savedToken = thunkApi.getState().auth.token;

    // якщо там нічого нема, не виконуємо запит
    if (!savedToken) {
      return thunkApi.rejectWithValue('Token does not exist!');
    }
    // якщо є - встановлюємо по замовчуванню хедер авторизації для запитів

    setAuthHeader(savedToken);
    // робимо запит за обліковими даними
    const { data } = await goitApi.get('users/me');
    // повертаємо дані в слайс для опрацювання
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
