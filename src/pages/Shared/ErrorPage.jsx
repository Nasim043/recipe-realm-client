import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className="text-9xl font-bold text-purple-400">{status || 404}</h1>
      <h1 className="text-4xl font-medium py-8">oops! {error?.message}</h1>
      <Link to='/' className='bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6'>Go to HomePage</Link>
    </div>
  );
};

export default ErrorPage;