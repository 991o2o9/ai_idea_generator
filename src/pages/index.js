import { lazy } from 'react';

export const HomePage = lazy(() =>
   import('./home/ui/HomePage').then((module) => ({ default: module.HomePage }))
);
