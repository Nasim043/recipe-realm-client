import React from 'react';
import Lottie from "lottie-react";
import Error_Page from '../../assets/error-page.json'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div className='flex flex-col justify-center items-center h-screen p-5 mt-5'>
      <Lottie animationData={Error_Page} loop={true} className='w-full md:w-2/5'/>
      <h1 className="text-xl md:text-3xl font-medium py-8 text-center">oops! {error?.message}</h1>
      <Link to='/' className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Go to HomePage</Link>
    </div>
  );
};

export default ErrorPage;