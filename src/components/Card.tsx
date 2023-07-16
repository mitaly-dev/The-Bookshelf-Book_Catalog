import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  const { title, author, publication, userEmail, imageUrl, genre } = book;
  return (
    <div>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border h-96">
        <div className="relative m-0 bg-transparent  text-gray-700 shadow-none rounded-t-lg w-full h-full border">
          <img src={imageUrl} alt="ui/ux review check w-full h-[100%]" />
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
          <div className="mt-3 flex justify-between">
            <button className="bg-blue-300 text-white px-5 py-2 rounded-lg">
              Add Wishlist
            </button>
            <Link to={`/book/${book._id}`}>View</Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
