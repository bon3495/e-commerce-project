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

import useStyles from './styles';
const Register = () => {
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
    <FormContainer formTitle="Create Account">
      <InputField label="Full Name" />
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
        label="I agree to the Terms and Privacy Policy."
        className={classes.checkboxLabel}
      />
      <Button
        fullWidth
        color="primary"
        size="large"
        variant="contained"
        className={classes.submitButton}
      >
        Sign Up
      </Button>
      <Box className={classes.links} textAlign="right">
        <LinkMui component={Link} to="/login" className={classes.link}>
          Already have an account? Sign in
        </LinkMui>
      </Box>
    </FormContainer>
  );
};

export default Register;
