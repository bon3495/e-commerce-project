import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Link as LinkMui,
} from '@material-ui/core';
import { onAuthStateChanged } from 'firebase/auth';
import 'firebase/compat/auth';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import {
  FormContainer,
  InputField,
  PasswordField,
} from '../../../../components';
import { auth, signInGoogle } from '../../../../firebase/firebase-utils';
import useStyles from './styles';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email address!')
    .email('Please enter a valid email address!'),

  password: yup
    .string()
    .required('Please enter your password!')
    .min(6, 'Password must be at least 6 characters!'),
});

const LoginForm = () => {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitLogin = values => {
    console.log(values);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async user => {
      if (!user) {
        // user log out, handle something here
        console.log('User is not logged in');
        return;
      }

      console.log('Logged in user: ', user.displayName);

      const token = await user.getIdToken();

      console.log('Token: ', token);
    });

    return () => unsub();
  }, []);

  return (
    <FormContainer formTitle="Sign In">
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <InputField
          label="Email Address"
          name="email"
          errors={errors}
          control={control}
        />
        <PasswordField
          label="Password"
          name="password"
          errors={errors}
          control={control}
        />

        <Button
          fullWidth
          color="primary"
          size="large"
          variant="contained"
          className={classes.submitButton}
          type="submit"
        >
          Sign In
        </Button>

        <Divider className={classes.divider} />

        <Button
          fullWidth
          color="default"
          size="large"
          variant="contained"
          className={classes.submitButton}
          onClick={signInGoogle}
        >
          Sign in with Google
        </Button>
        <Box className={classes.links} textAlign="right">
          <LinkMui component={Link} to="/register" className={classes.link}>
            Dont't have an account yet? Sign up here
          </LinkMui>
        </Box>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
