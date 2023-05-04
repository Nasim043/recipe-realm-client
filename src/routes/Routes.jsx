import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Blog from '../pages/Blog/Blog'
import Navbar from '../pages/Shared/Navbar';
import ErrorPage from '../pages/Shared/ErrorPage';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home/Home';
import ChefRecipes from '../pages/Home/ChefRecipes';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'chefs/:id',
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({params})=> fetch(`https://b7a10-chef-recipe-hunter-server-side-nasim043-nasim043.vercel.app/chefs/${params.id}`)
      },
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