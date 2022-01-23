import { unwrapResult } from '@reduxjs/toolkit';
import { onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  handleUserProfile,
  logIn,
  loginWithGoogle,
} from '../../../firebase/firebase-func';
import {
  userIsLoginSelector,
  userSelector,
  selectAuthData,
} from '../../../store/selectors';
import { loginUser, signInGG } from '../../../store/slices/userSlice';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const isLogin = useSelector(userIsLoginSelector);
  const handleSubmitLogin = async userLogin => {
    try {
      const { user } = await logIn(userLogin);
      const userRef = await handleUserProfile(user);

      onSnapshot(userRef, async user => {
        const resultAction = await dispatch(
          loginUser({
            id: user.id,
            ...user.data(),
          })
        );

        unwrapResult(resultAction);
        // const isLocation = location.state?.from || null;
        // if (!isLocation && isLogin) {
        //   navigate('/mens');
        // } else {
        //   navigate(location.state?.from);
        // }
      });
      if (location.state?.from) navigate(location.state.from);
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  const handleSignInGoogle = async () => {
    try {
      const { user } = await loginWithGoogle();
      const userRef = await handleUserProfile(user);

      onSnapshot(userRef, async user => {
        const resultAction = await dispatch(
          signInGG({
            id: user.id,
            ...user.data(),
          })
        );

        unwrapResult(resultAction);

        // const isLocation = location.state?.from || null;
        // if (!isLocation && isLogin) {
        //   navigate('/mens');
        // } else {
        //   navigate(location.state?.from);
        // }
      });
      if (location.state?.from) navigate(location.state.from);
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  useEffect(() => {
    if (isLogin) navigate('/mens');
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

// import { unwrapResult } from '@reduxjs/toolkit';
// import { onSnapshot } from 'firebase/firestore';
// import { useSnackbar } from 'notistack';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';
// import {
//   handleUserProfile,
//   logIn,
//   loginWithGoogle
// } from '../../../firebase/firebase-func';
// import { loginUser, signInGG } from '../../../store/slices/userSlice';
// import LoginForm from './LoginForm/LoginForm';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { enqueueSnackbar } = useSnackbar();
//   const handleSubmitLogin = async userLogin => {
//     try {
//       const { user } = await logIn(userLogin);
//       const userRef = await handleUserProfile(user);

//       onSnapshot(userRef, async user => {
//         const resultAction = await dispatch(
//           loginUser({
//             id: user.id,
//             ...user.data(),
//           })
//         );

//         unwrapResult(resultAction);
//         if (location.state?.from) navigate(location.state.from);
//         else navigate('/mens');
//       });
//     } catch (error) {
//       console.log(error.message);
//       enqueueSnackbar(error.message, { variant: 'error' });
//     }
//   };

//   const handleSignInGoogle = async () => {
//     try {
//       const { user } = await loginWithGoogle();
//       const userRef = await handleUserProfile(user);

//       onSnapshot(userRef, async user => {
//         const resultAction = await dispatch(
//           signInGG({
//             id: user.id,
//             ...user.data(),
//           })
//         );

//         unwrapResult(resultAction);
//       });

//       if (location.state?.from) navigate(location.state.from);
//     } catch (error) {
//       console.log(error.message);
//       enqueueSnackbar(error.message, { variant: 'error' });
//     }
//   };

//   // useEffect(() => {
//   //   if (isLogin) {
//   //     navigate('/home');
//   //   }
//   // }, [isLogin, navigate]);

//   return (
//     <>
//       <LoginForm
//         onLoginSubmit={handleSubmitLogin}
//         onSignInGG={handleSignInGoogle}
//       />
//     </>
//   );
// };

// export default Login;
