import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setFilterValue } = slice.actions;

export const selectFilter = state => state.filter.filter;
