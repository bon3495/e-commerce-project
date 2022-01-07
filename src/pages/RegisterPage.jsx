import React from 'react';
import { TitleImage } from '../components';
import { Register } from '../features/LoginRegister';

const RegisterPage = () => {
  return (
    <div>
      <TitleImage>Register</TitleImage>
      <Register />
    </div>
  );
};

export default RegisterPage;
