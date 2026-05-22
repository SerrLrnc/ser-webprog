import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Layouts
import DashLayout from './layouts/DashLayout';

// Dashboard Pages
import DashboardPage from './pages/DashboardPages/DashboardPage';
import ReportsPage from './pages/DashboardPages/ReportsPage';
import UsersPage from './pages/DashboardPages/UsersPage';

// Auth Pages
import SignInPage from './pages/AuthPages/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage';

// Error Page
import NotFoundPage from './pages/NotFoundPage';

// Auth Layout (simple wrapper for auth pages)
function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-700 to-black">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}

const routes = [
  {
    path: '/',
    element: <DashLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'users', element: <UsersPage /> },
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