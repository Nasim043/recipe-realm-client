import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '../pages/Auth/Login';
import Blog from '../pages/Blog/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>,
    children: [
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]

  }
])

export default router;