import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userIsLoginSelector } from '../../store/selectors';

const ProtectedRoute = () => {
  const isLogin = useSelector(userIsLoginSelector);
  const location = useLocation();

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
