import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const PasswordField = ({
  inputValues = {},
  handleChangeValue,
  handleClickShowPassword,
  handlePreventDefault,
}) => {
  const classes = useStyles();
  return (
    <FormControl
      variant="outlined"
      fullWidth
      required
      className={classes.input}
    >
      <InputLabel htmlFor="form-password">Password</InputLabel>
      <OutlinedInput
        id="form-password"
        label="Password"
        type={inputValues.showPassword ? 'text' : 'password'}
        value={inputValues.password}
        onChange={handleChangeValue('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handlePreventDefault}
              edge="end"
            >
              {inputValues.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordField;
