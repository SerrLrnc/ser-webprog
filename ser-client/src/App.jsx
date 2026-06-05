import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashLayout';

// Landing Pages
import HomePage from './pages/LandingPages/HomePage';
import AboutPage from './pages/LandingPages/AboutPage';
import ArticleListPage from './pages/LandingPages/ArticleListPage';  // Only this for public

// Auth Pages
import SignInPage from './pages/AuthPages/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage';

// Dashboard Pages
import DashboardPage from './pages/DashboardPages/DashboardPage';
import ReportsPage from './pages/DashboardPages/ReportsPage';
import UsersPage from './pages/DashboardPages/UsersPage';
import DashboardArticlesPage from './pages/DashboardPages/ArticlesPage';  // Admin CRUD
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'articles', element: <ArticleListPage /> },  // Public - shows 4 cards
      // NO individual article page in Landing - all 4 are on one page
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'articles', element: <DashboardArticlesPage /> },  // Admin CRUD
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;