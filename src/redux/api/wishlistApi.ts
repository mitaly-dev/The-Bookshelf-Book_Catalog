import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wishlistApi = createApi({
  reducerPath: 'wishlist',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Wishlist'],
  endpoints: (builder) => ({
    getBookWishlist: builder.query({
      query: () => `/api/v1/wishlist`,
      providesTags: ['Wishlist'],
    }),
    addBookWishlist: builder.mutation({
      query: (data) => ({
        url: `/api/v1/wishlist/add-wishlist`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Wishlist'],
    }),
  }),
});

export const { useGetBookWishlistQuery, useAddBookWishlistMutation } =
  wishlistApi;
