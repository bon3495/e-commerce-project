import React from 'react';
import { TitleImage } from '../components';
import { Login } from '../features/LoginRegister';

const LoginPage = () => {
  return (
    <div>
      <TitleImage>Sign In</TitleImage>
      <Login />
    </div>
  );
};

export default LoginPage;
