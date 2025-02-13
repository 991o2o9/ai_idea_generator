import { lazy } from 'react';

export const HomePage = lazy(() =>
   import('./home/ui/HomePage').then((module) => ({ default: module.HomePage }))
);

export const ChatPage = lazy(() =>
   import('./chat/ui/ChatPage').then((module) => ({ default: module.ChatPage }))
);

export const AboutUs = lazy(() =>
   import('./about/ui/AboutUs').then((module) => ({ default: module.AboutUs }))
);
