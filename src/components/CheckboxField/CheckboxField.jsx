import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
import useStyles from './styles';

const CheckboxField = ({ control, label, name, errors }) => {
  const hasErrors = !!errors[name];
  const classes = useStyles();
  return (
    <FormControl required error={hasErrors} component="fieldset">
      <FormControlLabel
        control={
          <Controller
            rules={{ required: true }}
            control={control}
            name={name}
            render={({ field }) => <Checkbox color="primary" {...field} />}
          />
        }
        label={label}
        className={`${classes.checkboxLabel} ${hasErrors ? 'invalid' : ''}`}
      />
    </FormControl>
  );
};

export default CheckboxField;
