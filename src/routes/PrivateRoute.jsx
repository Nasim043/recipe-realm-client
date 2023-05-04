import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex justify-center items-center space-x-2 h-96">
        <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin border-blue-400'></div>
        <span className="text-4xl font-medium text-gray-500">Loading...</span>
      </div>
      
    )
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;