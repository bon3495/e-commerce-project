import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  checkboxLabel: {
    marginRight: 0,
    '& span': {
      [theme.breakpoints.down('460')]: {
        fontSize: '14px',
      },
    },
    '&.invalid span': {
      color: 'red',
    },
  },
}));
