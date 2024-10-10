import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk('fetchCart', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('products');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk('addToCart', async (product, thunkApi) => {
  try {
    const { data } = await axios.post('products', { ...product, count: 1 });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const removeFromCart = createAsyncThunk('removeFromCart', async (product, thunkApi) => {
  try {
    const { data } = await axios.delete(`products/${product.id}`);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const increaseProductCount = createAsyncThunk('increaseCount', async (product, thunkApi) => {
  try {
    await axios.put(`products/${product.id}`, { ...product, count: product.count + 1 });
    thunkApi.dispatch(fetchCart());
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const decreaseProductCount = createAsyncThunk('decreaseCount', async (product, thunkApi) => {
  try {
    await axios.put(`products/${product.id}`, { ...product, count: product.count - 1 });
    thunkApi.dispatch(fetchCart());
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
