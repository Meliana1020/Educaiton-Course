import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import ErrorPage from './Pages/error.jsx';
import HomePage from './Pages/home.jsx';
import ProfilePage from './Pages/profile.jsx';
import DetailProductPage from './Pages/detailprduct.jsx';
import useAuthSync from './Store/useAuthStore.jsx';
import DashboardAdmin from './Pages/admin.jsx';
import PaymentSuccesPage from './Pages/paymentsucces.jsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/detailproduct',
    element: <DetailProductPage />
  },
  {
    path: '/paymentsucces',
    element: <PaymentSuccesPage />
  },
  {
    path: '/admin',
    element: <DashboardAdmin />
  },
  {
    path: '*',
    element: <ErrorPage />,
    errorElement: <ErrorPage />
  },
]);

const MainApp = () => {
  useAuthSync();

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
