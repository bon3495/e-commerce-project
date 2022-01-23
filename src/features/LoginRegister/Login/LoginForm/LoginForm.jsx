import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Link as LinkMui,
} from '@material-ui/core';
import 'firebase/compat/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {
  FormContainer,
  InputField,
  PasswordField,
} from '../../../../components';
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

const LoginForm = ({ onLoginSubmit, onSignInGG }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleSubmitLogin = async values => {
    if (!onLoginSubmit) return;

    await onLoginSubmit(values);
  };

  // const handleClickRegister = () => {
  //   navigate('/register', { state: { from: location }, replace: true });
  // };

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
          disabled={isSubmitting}
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
          onClick={onSignInGG}
        >
          Sign in with Google
        </Button>
        <Box className={classes.links} textAlign="right">
          {/* <LinkMui component={Link} to="/register" className={classes.link}> */}
          <LinkMui component={Link} to="/register" className={classes.link}>
            Dont't have an account yet? Sign up here
          </LinkMui>
        </Box>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
