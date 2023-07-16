import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import NotFound from '../pages/NotFound';
import AllBooks from '@/pages/Books/AllBooks';
import SignIn from '@/pages/Auth/SignIn';
import SignUp from '@/pages/Auth/SignUp';
import AddBook from '@/pages/Books/AddBook';
import SingleBook from '@/pages/Books/SingleBook';
import UpdateBook from '@/pages/Books/UpdateBook';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/user/signin',
        element: <SignIn />,
      },
      {
        path: '/user/signup',
        element: <SignUp />,
      },
      {
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/add-new-book',
        element: <AddBook />,
      },
      {
        path: '/book/:id',
        element: <SingleBook />,
      },
      {
        path: '/update-book/:id',
        element: <UpdateBook />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default routes;
