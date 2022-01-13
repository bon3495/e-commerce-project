import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userIsLoginSelector } from '../../../store/selectors';
import { loginUser, signInGG } from '../../../store/slices/userSlice';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const isLogin = useSelector(userIsLoginSelector);
  const handleSubmitLogin = async userLogin => {
    try {
      const resultAction = await dispatch(loginUser(userLogin));
      unwrapResult(resultAction);
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  const handleSignInGoogle = async () => {
    try {
      const resultAction = await dispatch(signInGG());
      unwrapResult(resultAction);
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/home');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <LoginForm
        onLoginSubmit={handleSubmitLogin}
        onSignInGG={handleSignInGoogle}
      />
    </>
  );
};

export default Login;
