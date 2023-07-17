import { useGetBookWishlistQuery } from '@/redux/api/bookApi';
import { userInfoFromLocalstorage } from '@/utils/utils';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { data: wishlist, isLoading } = useGetBookWishlistQuery(undefined);
  const user: string | null = JSON.parse(
    localStorage.getItem('Bookshelf-Info') || 'null'
  ) as string | null;
  const navigate = useNavigate();

  console.log('wishlist', wishlist);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const logoutHandle = () => {
    localStorage.removeItem('Bookshelf-Info');
    toast.success('Log out successfully');
    navigate('/');
    window.location.reload();
  };
  return (
    <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-1 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-20 lg:py-2">
      <div className="flex items-center text-gray-900">
        <Link
          to="/"
          className="mr-4 block cursor-pointer py-1.5 text-2xl font-semibold font-sans leading-relaxed text-inherit antialiased"
        >
          The Bookshelf
        </Link>
        <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
          <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <Link to="/all-books" className="flex items-center">
              All Books
            </Link>
          </li>
        </ul>
        {/* right side content */}
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {' '}
              <circle
                cx="9"
                cy="7"
                r="3"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{' '}
              <path
                d="M11 13H7C4.79086 13 3 14.7909 3 17C3 18.6569 4.34315 20 6 20H12C13.6569 20 15 18.6569 15 17C15 14.7909 13.2091 13 11 13Z"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{' '}
              <path
                d="M15.7751 9.25L20.7249 9.25M20.7249 9.25L19 7.5M20.7249 9.25L19 10.9749"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{' '}
            </svg>

            {user?.accessToken ? (
              <button onClick={logoutHandle}>Log Out</button>
            ) : (
              <div className="flex flex-col text-sm font-semibold ">
                <Link to="/user/signin" className="hover:text-blue-700">
                  Sign In
                </Link>
                <Link to="/user/signup" className="hover:text-blue-700">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center gap-7">
            <div className="relative">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {' '}
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    id="mainIconPathAttribute"
                  ></path>{' '}
                </svg>
              </button>
              <span className="absolute -right-4 -top-2 w-5 h-5 text-[10px] rounded-full bg-black text-white flex justify-center items-center">
                2
              </span>
            </div>
            <Link to="/book/wishlist" className="relative">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {' '}
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    id="mainIconPathAttribute"
                  ></path>{' '}
                </svg>
              </button>
              <span className="absolute -right-4 -top-2 w-5 h-5 text-[10px] rounded-full bg-black text-white flex justify-center items-center">
                {wishlist.data?.data?.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
