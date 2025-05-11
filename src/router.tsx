import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

export default router;
