import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import Blog from '../pages/Blog/Blog'
import Navbar from '../pages/Shared/Navbar';
import ErrorPage from '../pages/Shared/ErrorPage';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login> 
      },
      {
        path: 'register',
        element: <Register></Register> 
      },
    ]

  }
])

export default router;