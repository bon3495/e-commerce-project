import React from 'react';
import { ImageTitle } from '../components';
import { Login } from '../features/LoginRegister';

const LoginPage = () => {
  return (
    <div>
      <ImageTitle>Sign In</ImageTitle>
      <Login />
    </div>
  );
};

export default LoginPage;
