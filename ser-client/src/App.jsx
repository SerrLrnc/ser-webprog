import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your pages
import Layout from './components/Layout';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,  // This makes HomePage the default route at "/"
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/articles',
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;