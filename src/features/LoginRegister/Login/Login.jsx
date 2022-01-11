import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link as LinkMui,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, InputField, PasswordField } from '../../../components';
import { signInGoogle } from '../../../firebase/firebase-utils';
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    showPassword: false,
    isChecked: false,
  });

  const handleChangeValue = prop => e => {
    setInputValues({ ...inputValues, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setInputValues(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const handlePreventDefault = e => {
    e.preventDefault();
  };

  const handleClickChecked = e => {
    setInputValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  return (
    <FormContainer formTitle="Sign In">
      <InputField label="Email Address" />
      <PasswordField
        inputValues={inputValues}
        handleChangeValue={handleChangeValue}
        handleClickShowPassword={handleClickShowPassword}
        handlePreventDefault={handlePreventDefault}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={inputValues.isChecked}
            onChange={handleClickChecked}
            name="isChecked"
            color="primary"
          />
        }
        label="Remember Me"
        className={classes.checkboxLabel}
      />
      <Button
        fullWidth
        color="primary"
        size="large"
        variant="contained"
        className={classes.submitButton}
      >
        Sign In
      </Button>

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
    </FormContainer>
  );
};

export default Login;
