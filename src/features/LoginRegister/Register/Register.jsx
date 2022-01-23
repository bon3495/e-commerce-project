import { unwrapResult } from '@reduxjs/toolkit';
import { onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleUserProfile, register } from '../../../firebase/firebase-func';
import { userIsLoginSelector } from '../../../store/selectors';
import { registerUser } from '../../../store/slices/userSlice';
import RegisterForm from './RegisterForm/RegisterForm';

const Register = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = useSelector(userIsLoginSelector);
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

      if (location.state?.from) navigate(location.state.from);
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  useEffect(() => {
    const isStateNull = location.state?.from || null;

    if (!isStateNull && isLogin) navigate('/mens');

    return () => {};
  }, [navigate, isLogin, location.state]);

  return (
    <>
      <RegisterForm onSubmitRegister={handleSubmit} />
    </>
  );
};

export default Register;
