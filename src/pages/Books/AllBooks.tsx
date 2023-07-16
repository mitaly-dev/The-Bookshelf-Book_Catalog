import React from 'react';
import { Link } from 'react-router-dom';

const AllBooks = () => {
  return (
    <section className="my-10 px-20">
      <div className="flex justify-end">
        <Link
          to="/add-new-book"
          className="text-white bg-blue-700 px-6 py-2 rounded-lg flex items-center gap-1 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            {' '}
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              id="mainIconPathAttribute"
            ></path>{' '}
          </svg>
          Add New Book
        </Link>
      </div>
    </section>
  );
};

export default AllBooks;
