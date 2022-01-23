import React from 'react';
import { ImageTitle, Toolbar } from '../components';
import { Login } from '../features/LoginRegister';

const LoginPage = () => {
  return (
    <Toolbar>
      <ImageTitle>Sign In</ImageTitle>
      <Login />
    </Toolbar>
  );
};

export default LoginPage;
