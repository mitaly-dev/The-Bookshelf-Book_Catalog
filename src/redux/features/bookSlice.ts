import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  book: {},
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    updateBook: (state, action) => {
      state.book = { ...action.payload };
    },
  },
});

export const { updateBook } = bookSlice.actions;

export default bookSlice.reducer;
