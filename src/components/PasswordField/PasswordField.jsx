import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import useStyles from './styles';
import { Controller } from 'react-hook-form';

const PasswordField = ({ name, label, control, errors }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const hasErrors = !!errors[name];

  return (
    <FormControl
      variant="outlined"
      fullWidth
      required
      className={classes.input}
      error={hasErrors}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <OutlinedInput
            id={name}
            name={name}
            label={label}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleToggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            {...field}
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

export default PasswordField;
