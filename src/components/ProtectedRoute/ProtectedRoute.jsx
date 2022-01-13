import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userIsLoginSelector } from '../../store/selectors';

export const ProtectedRouteCart = ({ children }) => {
  const isLogin = useSelector(userIsLoginSelector);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const ProtectedRouteLogin = ({ children }) => {
  const isLogin = useSelector(userIsLoginSelector);

  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return children;
};
