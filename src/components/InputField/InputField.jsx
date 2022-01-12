import { TextField } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { Controller } from 'react-hook-form';

const InputField = ({ name, label, control, errors }) => {
  const classes = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={!!error}
          label={label}
          type="text"
          variant="outlined"
          className={classes.input}
          fullWidth
          required
          helperText={errors[name]?.message}
          {...field}
        />
      )}
    />
  );
};

export default InputField;
