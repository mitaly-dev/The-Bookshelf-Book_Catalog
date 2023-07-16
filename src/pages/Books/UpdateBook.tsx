import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import {
  useAddNewBookMutation,
  useGetSingleBookQuery,
} from '@/redux/api/bookApi';
import { userInfoFromLocalstorage } from '@/utils/utils';

const UpdateBook = () => {
  const navigate = useNavigate();
  const user = userInfoFromLocalstorage;
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess, error } =
    useGetSingleBookQuery(id);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  const {
    title,
    author,
    publication,
    userEmail,
    imageUrl,
    genre,
    _id: userId,
  } = data.data;
  // title: string;
  // author: string;
  // genre: string;
  // publication: string;
  // imageUrl: string;
  // userEmail: string;
  // reviews: Ireview[];

  interface MyInputTypes {
    title: string;
    author: string;
    genre: string;
    publication: string;
    imageUrl: string;
    userEmail: string;
  }

  //   useEffect(() => {
  //     if (isSuccess) {
  //       toast.success(data?.message);
  //       navigate('/all-books');
  //     }
  //     if (isError) {
  //       toast.error(error?.data?.message);
  //     }
  //   }, [isSuccess, isError, data?.message]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<MyInputTypes>();

  const updateUserHandle = (data: MyInputTypes) => {
    if (data.imageUrl == '') {
      data.imageUrl = 'https://i.ibb.co/7b2Gx0B/book.png';
    }
    const allData = { ...data, userEmail: user?.email };
    console.log(data);
    // addNewBook(allData);
  };
  return (
    <section className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none h-[80vh] justify-center items-center w-5/12 border m-auto my-10">
      <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Update Book
      </h4>
      <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Enter details to create Book!
      </p>
      <form
        onSubmit={handleSubmit(updateUserHandle)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              {...register('title', { required: 'Title is required!' })}
              type="text"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Title
            </label>
            {errors?.title && (
              <p className="text-red-600 text-sm font-semibold">
                {errors.title?.message}
              </p>
            )}
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              type="text"
              {...register('author', {
                required: 'Author name is required',
              })}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label
              htmlFor="author"
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Author
            </label>
            {errors?.author && (
              <p className="text-red-600 text-sm font-semibold">
                {errors?.author.message}
              </p>
            )}
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            {/* <input
              {...register('genre', {
                required: 'Genre is required!',
              })}
              type="text"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            /> */}
            <select
              {...register('genre', {
                required: 'Genre is required!',
              })}
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option value="">Select</option>
              <option value="nobel">Nobel</option>
              <option value="comedy">Comedy</option>
              <option value="history">History</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Genre
            </label>
            {errors?.genre && (
              <p className="text-red-600 text-sm font-semibold">
                {errors?.genre.message}
              </p>
            )}
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              {...register('publication', {
                required: 'Publication is required!',
              })}
              type="date"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Publication
            </label>
            {errors?.publication && (
              <p className="text-red-600 text-sm font-semibold">
                {errors?.publication.message}
              </p>
            )}
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              {...register('imageUrl')}
              type="text"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Image Url
            </label>
          </div>
        </div>
        <button
          className="mt-6 block w-full select-none rounded-lg bg-blue-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-700/20 transition-all hover:shadow-lg hover:shadow-blue-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
          data-ripple-light="true"
        >
          Update Book
        </button>
      </form>
    </section>
  );
};

export default UpdateBook;