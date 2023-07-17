import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksWishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlists',
  initialState,
  reducers: {
    setWishlistBook: (state, action) => {
      console.log('action.', action.payload);
      state.booksWishlist = [...action.payload];
    },
    handleWishlistFromRD: (state, action) => {
      const mainBook = action.payload.bookId;
      console.log('mainbook', mainBook);
      const alreadyExist = state.booksWishlist?.find(
        (book) => book?.bookId === mainBook
      );
      if (alreadyExist) {
        state.booksWishlist = state.booksWishlist.filter(
          (book) => book?.bookId !== mainBook
        );
      } else {
        state.booksWishlist = [...state.booksWishlist, action.payload];
      }
    },
  },
});

export const { setWishlistBook, handleWishlistFromRD } = wishlistSlice.actions;

export default wishlistSlice.reducer;
