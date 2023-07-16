import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  const { title, author, publication, userEmail, imageUrl, genre } = book;
  return (
    <div>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border h-96">
        <div className="flex justify-center items-center m-0 bg-transparent  text-gray-700 shadow-none rounded-t-lg h-48 border rounded p-2">
          <img
            src={imageUrl ? imageUrl : 'https://i.ibb.co/CtRJv8S/book2.jpg'}
            alt="ui/ux review check "
            className="w-full h-full object-contain"
          />
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
            <button className="bg-blue-300  px-4 py-2 rounded-lg flex gap-2 items-center">
              Add Wishlist
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-heart-fill"
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
            <Link to={`/book/${book._id}`} className="text-sm text-blue-600 ">
              View
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
