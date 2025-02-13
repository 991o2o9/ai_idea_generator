import { createRoot } from 'react-dom/client';
import { AppRouter } from './config/router/appRouter/AppRouter.jsx';
import './styles/global.scss';

createRoot(document.getElementById('root')).render(<AppRouter />);
