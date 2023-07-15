import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import { auth } from './api/authApi';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    cart: cartReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
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
