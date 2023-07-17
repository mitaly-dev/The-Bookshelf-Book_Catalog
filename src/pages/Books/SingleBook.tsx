import {
  useAddBookReviewMutation,
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from '@/redux/api/bookApi';
import { updateBook } from '@/redux/features/bookSlice';
import { userInfoFromLocalstorage } from '@/utils/utils';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SingleBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = userInfoFromLocalstorage;
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteBook] = useDeleteBookMutation();
  const [addBookReview, { isSuccess }] = useAddBookReviewMutation();
  const [review, setReview] = useState('');

  if (isLoading) {
    return <p>Loading..</p>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log('issu', data);
  //     // toast.success(data.message);
  //   }
  // }, [data, isSuccess]);

  const {
    title,
    author,
    publication,
    userEmail,
    imageUrl,
    genre,
    _id: userId,
    reviews,
  } = data?.data || {};

  console.log('reviews,', reviews);

  const handleEditButton = (userId: string) => {
    if (user?.email !== userEmail) {
      return toast.error('You are not authorized to edit this book!');
    }
    dispatch(updateBook(data?.data));
    navigate(`/update-book/${userId}`);
  };

  const handleDeleteBook = () => {
    const isTrue = window.confirm(
      'Are you sure , you want to delete this book'
    );
    if (isTrue) {
      deleteBook(id);
      navigate('/all-books');
    }
  };

  const handleReview = (e: any) => {
    e.preventDefault();
    if (review) {
      const data = { review, user: user.email };
      addBookReview({ id, data });
      setReview('');
    } else {
      toast.error('Please write a review!');
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="px-20 my-10 w-9/12 m-auto min-h-[70vh]">
          <div className="relative grid grid-cols-2 gap-3 rounded-xl bg-clip-border text-gray-700 shadow-md border">
            <div className="relative m-0 overflow-hidden bg-transparent bg-clip-border text-gray-700 shadow-none rounded-t-lg w-full h-full object-cover">
              <img src={imageUrl} alt="ui/ux review check w-full " />
            </div>
            <div className="px-2 pb-4 flex flex-col  mt-4">
              <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-3">
                {title}
              </h4>
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                Author Name : {author}
              </p>
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                Genree : {genre}
              </p>
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                Publication Date : {publication}
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleEditButton(userId)}
                  className="bg-blue-800  hover:bg-blue-500 text-white w-24 py-2 text-center  rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteBook}
                  className="bg-black hover:bg-gray-700 text-white py-2 rounded-lg w-24"
                >
                  Delete
                </button>
              </div>
              <div className="my-3">
                <h3 className="font-semibold">Give a Review </h3>
                <form onSubmit={(e) => handleReview(e)}>
                  <textarea
                    onChange={(e) => setReview(e.target.value)}
                    value={review}
                    name="review"
                    cols="40"
                    rows="4"
                    className="border rounded-lg px-2 py-2"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-800   hover:bg-blue-500 text-white w-24 py-2 text-center  rounded-lg"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-blue-800 my-2">
                  Reviews
                </h3>
                {reviews?.map((review: any) => {
                  return (
                    <div className="flex gap-2">
                      <span className="w-7 h-7 flex items-center justify-center mt-1 text-sm capitalize rounded-full bg-gray-500 text-white">
                        {review?.user?.slice(0, 1)}
                      </span>
                      <div>
                        <p className="text-sm">{review?.user}</p>
                        <p>{review?.review}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBook;
