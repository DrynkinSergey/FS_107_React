import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addToCart, fetchCart, removeFromCart } from './cartOps';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const cartSlice = slice.reducer;

export const selectCart = state => state.cart.items;
export const selectAmount = createSelector([selectCart], cart => {
  return cart.reduce((amount, curr) => amount + curr.price * curr.count, 0).toFixed(2);
});
