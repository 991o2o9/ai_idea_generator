import { RouterProvider } from 'react-router-dom';
import { router } from '../main/Router';

export const AppRouter = () => {
   return (
      <RouterProvider future={{ v7_startTransition: true }} router={router} />
   );
};
