import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchStr: '',
};
const slice = createSlice({
  name: 'searchFilter',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.searchStr = action.payload;
    },
  },
});

export const searchFilterReducer = slice.reducer;
export const { changeSearch } = slice.actions;

export const selectSearchStr = state => state.searchFilter.searchStr;
