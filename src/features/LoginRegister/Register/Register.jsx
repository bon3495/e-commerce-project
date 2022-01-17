import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../store/slices/userSlice';
import RegisterForm from './RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { handleUserProfile, register } from '../../../firebase/firebase-func';
import { onSnapshot } from 'firebase/firestore';

const Register = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleSubmit = async newUser => {
    try {
      const { email, password, displayName } = newUser;
      const { user } = await register(email, password);

      const userRef = await handleUserProfile(user, { displayName });

      onSnapshot(userRef, async user => {
        const resultAction = await dispatch(
          registerUser({
            id: user.id,
            ...user.data(),
          })
        );

        unwrapResult(resultAction);
      });

      enqueueSnackbar('Register successfully!', { variant: 'success' });

      navigate('/home');
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <>
      <RegisterForm onSubmitRegister={handleSubmit} />
    </>
  );
};

export default Register;
