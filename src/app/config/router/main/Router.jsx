import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../layout/Layout';
import { path } from '@src/shared/constants/constants';
import { HomePage } from '@src/pages';

export const router = createBrowserRouter(
   [
      {
         path: path.home,
         element: <Layout />,
         children: [
            {
               path: path.home,
               element: <HomePage />,
            },
         ],
      },
   ],
   {
      future: {
         v7_startTransition: true,
         v7_relativeSplatPath: true,
         v7_fetcherPersist: true,
         v7_normalizeFormMethod: true,
         v7_partialHydration: true,
         v7_skipActionStatusRevalidation: true,
      },
   }
);
