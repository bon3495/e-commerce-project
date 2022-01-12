import React from 'react';
import { signupWithEmailPassword } from '../../../firebase/firebase-utils';
import RegisterForm from './RegisterForm/RegisterForm';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { register, userActions } from '../../../store/slices/userSlice';

const Register = () => {
  const usedispatch = useDispatch();
  const handleSubmit = async newUser => {
    try {
      const userCredential = await signupWithEmailPassword(newUser);
      const { user } = await userCredential;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <RegisterForm onSubmitRegister={handleSubmit} />
    </>
  );
};

export default Register;
