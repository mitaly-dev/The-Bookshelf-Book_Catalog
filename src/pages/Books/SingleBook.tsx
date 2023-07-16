import { useGetSingleBookQuery } from '@/redux/api/bookApi';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleBook = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetSingleBookQuery(id);
  console.log('dataaaaaaaaaaaaaa.data', data?.data);
  if (isLoading) {
    return <p>loading...</p>;
  }
  const { title, author, publication, userEmail, imageUrl, genre } = data.data;

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
                <Link
                  to={`/book/${data._id}`}
                  className="bg-blue-800  hover:bg-blue-500 text-white w-24 py-2 text-center  rounded-lg"
                >
                  Edit
                </Link>
                <button className="bg-black hover:bg-gray-700 text-white py-2 rounded-lg w-24">
                  Delete
                </button>
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
