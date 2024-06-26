import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
import Shimmer from './src/components/Shimmer';
// Lazy Loading
const AboutUs = lazy(() => import('./src/components/AboutUs'));
const Contact = lazy(() => import('./src/components/Contact'));

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

// Routing - Path Configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />);
