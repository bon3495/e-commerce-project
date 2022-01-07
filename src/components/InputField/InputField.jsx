import { TextField } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const InputField = ({ label }) => {
  const classes = useStyles();
  return (
    <TextField
      id={label}
      label={label}
      type="text"
      variant="outlined"
      className={classes.input}
      fullWidth
      required
    />
  );
};

export default InputField;
