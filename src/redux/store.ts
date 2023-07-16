import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { bookApi } from './api/bookApi';
import updateBookReducer from './features/bookSlice';
import searchReducer from './features/searchSlice';
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    updateBook: updateBookReducer,
    search: searchReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// export const store = configureStore({
//   reducer: {
//     auth:authReducer,
//     video:videoReducer,
//     quizMark:quizMarkReducer,
//     [apiSlice.reducerPath] : apiSlice.reducer,
//     [videosApi.reducerPath] : videosApi.reducer,
//     [assignmentsApi.reducerPath] : assignmentsApi.reducer,
//     [assignmentMarkApi.reducerPath] : assignmentMarkApi.reducer,
//     [quizzesApi.reducerPath] : quizzesApi.reducer,
//     [quizMarkApi.reducerPath] : quizMarkApi.reducer,
//   },
//   middleware:getDefaultMiddlewares=>getDefaultMiddlewares().concat(
//     apiSlice.middleware,
//     videosApi.middleware,
//     assignmentsApi.middleware,
//     assignmentMarkApi.middleware,
//     quizzesApi.middleware,
//     quizMarkApi.middleware
//     )
// });
