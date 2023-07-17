import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { bookApi } from './api/bookApi';
import updateBookReducer from './features/bookSlice';
import searchReducer from './features/searchSlice';
import publishYearReducer from './features/publishYearSlice';
import wishlistReducer from './features/wishlistSlice';
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    updateBook: updateBookReducer,
    search: searchReducer,
    publicationYear: publishYearReducer,
    wishlists: wishlistReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
