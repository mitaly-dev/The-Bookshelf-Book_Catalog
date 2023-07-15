import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import NotFound from '../pages/NotFound';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default routes;
