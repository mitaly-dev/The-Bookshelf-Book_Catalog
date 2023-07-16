import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `api/v1/auth/create-user`,
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `api/v1/auth/login-user`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = authApi;
