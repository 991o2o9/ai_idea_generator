import { Suspense } from 'react';
import Loader from 'react-loaders';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { Header } from '@src/widgets/header';
export const Layout = () => {
   return (
      <>
         <Header />
         <Suspense fallback={<Loader type="pacman" />}>
            <div className={styles.content}>
               <Outlet />
            </div>
         </Suspense>
      </>
   );
};
