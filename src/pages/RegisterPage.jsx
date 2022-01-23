import React from 'react';
import { ImageTitle, Toolbar } from '../components';
import { Register } from '../features/LoginRegister';

const RegisterPage = () => {
  return (
    <Toolbar>
      <ImageTitle>Register</ImageTitle>
      <Register />
    </Toolbar>
  );
};

export default RegisterPage;
