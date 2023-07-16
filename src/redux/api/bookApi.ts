import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
  reducerPath: 'book',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => '/api/v1/book',
    }),
    getSingleBook: builder.query({
      query: (id) => `/api/v1/book/${id}`,
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: `/api/v1/book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/book/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/v1/book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useAddNewBookMutation,
  useUpdateBookMutation,
} = bookApi;
