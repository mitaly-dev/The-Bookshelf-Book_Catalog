import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import NotFound from '../pages/NotFound';
import AllBooks from '@/pages/AllBooks';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

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
        path: '/all-books',
        element: <AllBooks />,
      },
      {
        path: '/user/signin',
        element: <SignIn />,
      },
      {
        path: '/user/signup',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default routes;
