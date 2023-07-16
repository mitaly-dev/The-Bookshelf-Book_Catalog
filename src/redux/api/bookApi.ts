import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
  reducerPath: 'book',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: ({ searchTerm, genre, publicationYear }) =>
        `/api/v1/book/?${searchTerm && `searchTerm=${searchTerm}`}${
          genre && `&genre=${genre}`
        }${publicationYear && `&publicationYear=${publicationYear}`}`,
      providesTags: ['Books'],
    }),
    getSingleBook: builder.query({
      query: (id) => `/api/v1/book/${id}`,
      providesTags: ['Books'],
    }),
    getFeaturedBook: builder.query({
      query: () => `/api/v1/book/featuredBook`,
      providesTags: ['Books'],
    }),
    addNewBook: builder.mutation({
      query: (data) => ({
        url: `/api/v1/book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
    updateBookInfo: builder.mutation({
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
    addBookReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/book/add-review/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useAddNewBookMutation,
  useUpdateBookInfoMutation,
  useDeleteBookMutation,
  useGetFeaturedBookQuery,
  useAddBookReviewMutation,
} = bookApi;
