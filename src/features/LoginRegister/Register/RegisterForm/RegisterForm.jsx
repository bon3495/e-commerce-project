import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  LinearProgress,
  Link as LinkMui,
} from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import {
  FormContainer,
  InputField,
  PasswordField,
} from '../../../../components';
import useStyles from './styles';

const schema = yup.object().shape({
  displayName: yup
    .string()
    .required('Please enter your full name!')
    .trim()
    .test(
      'should has at least two words',
      'Please enter at least two words!',
      value => value.split(' ').length >= 2
    ),

  //   isChecked: yup.bool().oneOf([true], 'Accept is required'),

  email: yup
    .string()
    .required('Please enter your email address!')
    .email('Please enter a valid email address!'),

  password: yup
    .string()
    .required('Please enter your password!')
    .min(6, 'Password must be at least 6 characters!'),

  retypePassword: yup
    .string()
    .required('Please re-enter your password!')
    .oneOf([yup.ref('password')], 'Password is in correct. Please try again!'),
});

const RegisterForm = ({ onSubmitRegister }) => {
  const classes = useStyles();

  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      displayName: '',
      email: '',
      password: '',
      retypePassword: '',
      // isChecked: false,
    },
    resolver: yupResolver(schema),
  });

  const handleLoginSubmit = async user => {
    if (!onSubmitRegister) return;

    await onSubmitRegister(user);
    resetField('password');
    resetField('retypePassword');
  };

  return (
    <FormContainer formTitle="Create Account" id="register">
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <InputField
          name="displayName"
          label="Full Name"
          control={control}
          errors={errors}
        />
        <InputField
          name="email"
          label="Email"
          control={control}
          errors={errors}
        />
        <PasswordField
          name="password"
          label="Password"
          control={control}
          errors={errors}
        />

        <PasswordField
          errors={errors}
          control={control}
          label="Retype Password"
          name="retypePassword"
        />
        {/* <CheckboxField
          name="isChecked"
          label="I agree to the Terms and Privacy Policy."
          control={control}
          errors={errors}
        /> */}
        <Button
          fullWidth
          color="primary"
          size="large"
          variant="contained"
          className={classes.submitButton}
          type="submit"
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
        <Box className={classes.links} textAlign="right">
          <LinkMui component={Link} to="/login" className={classes.link}>
            Already have an account? Sign in
          </LinkMui>
        </Box>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
