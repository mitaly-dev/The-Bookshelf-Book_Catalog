import { useUpdateBookInfoMutation } from '@/redux/api/bookApi';
import {
  useAddBookWishlistMutation,
  useGetBookWishlistQuery,
} from '@/redux/api/wishlistApi';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  const [addBookWishlist, { data: wishData, isLoading, isError, isSuccess }] =
    useAddBookWishlistMutation();

  const { data: wishlist } = useGetBookWishlistQuery(undefined);

  useEffect(() => {
    if (isSuccess) {
      console.log('wis', wishData?.message);
      toast.success(wishData?.message);
    }
  }, [isSuccess]);

  console.log(' data all wish ', wishlist?.data);

  const {
    title,
    author,
    publication,
    userEmail,
    imageUrl,
    genre,
    _id: id,
    wishlist: myWishlist,
  } = book;

  const handleWishlist = () => {
    console.log('!wishlist my wish');
    addBookWishlist({ book, bookId: id });
  };
  console.log('wish', wishlist);
  return (
    <div>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border h-96">
        <div className="relative flex justify-center items-center m-0 bg-transparent  text-gray-700 shadow-none rounded-t-lg h-48 border rounded p-2">
          <img
            src={imageUrl ? imageUrl : 'https://i.ibb.co/CtRJv8S/book2.jpg'}
            alt="ui/ux review check "
            className="w-full h-full object-contain"
          />
          <div className="flex flex-col gap-3 absolute right-3 top-3">
            <button onClick={() => handleWishlist()}>
              {wishlist?.data?.data?.find(
                (x: any) => x?.bookId === book?._id
              ) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {' '}
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    id="mainIconPathAttribute"
                    fill="#ff006a"
                    stroke-width="0"
                    stroke="#ff0000"
                  ></path>{' '}
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                  fill="#ff006a"
                >
                  {' '}
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    id="mainIconPathAttribute"
                  ></path>{' '}
                </svg>
              )}
            </button>
            <Link to={`/book/${book._id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {' '}
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  id="mainIconPathAttribute"
                ></path>{' '}
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                  id="mainIconPathAttribute"
                ></path>{' '}
              </svg>
            </Link>
          </div>
        </div>
        <div className="px-2 pb-4">
          <span className="font-semibold capitalize text-sm text-gray-500">
            {genre}
          </span>
          <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-3 capitalize">
            {title}
          </h4>
          <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            Author Name : {author}
          </p>
          <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            Publication Date : {publication}
          </p>

          <div className="mt-3 flex justify-between gap-2">
            <button className="bg-blue-300  px-3 text-sm py-2 rounded-lg flex gap-2 items-center">
              Add Wishlist
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {' '}
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  id="mainIconPathAttribute"
                  fill="#ff006a"
                  stroke-width="0"
                  stroke="#ff0000"
                ></path>{' '}
              </svg>
            </button>
            <button className="bg-blue-300  px-3 text-sm py-2 rounded-lg flex gap-2 items-center">
              Plan to read
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {' '}
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  id="mainIconPathAttribute"
                  fill="#ff006a"
                  stroke-width="0"
                  stroke="#ff0000"
                ></path>{' '}
              </svg>
            </button>
          </div>
          <Link to={`/book/${book._id}`} className="text-sm text-blue-600 ">
            View
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
