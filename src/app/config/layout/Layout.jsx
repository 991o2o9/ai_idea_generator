import { Suspense } from 'react';
import Loader from 'react-loaders';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
   return (
      <div>
         <Suspense fallback={<Loader type="pacman" />}>
            <Outlet />
         </Suspense>
      </div>
   );
};
