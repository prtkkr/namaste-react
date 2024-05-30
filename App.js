import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './src/components/AboutUs';
import ErrorPage from './src/components/Error';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

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
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
