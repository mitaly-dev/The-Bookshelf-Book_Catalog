import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  // const { user, isLoading } = useAppSelector((state) => state.user);

  // const { pathname } = useLocation();

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (!user.email && !isLoading) {
  //   return <Navigate to="/login" state={{ path: pathname }} />;
  // }

  return children;
}
