import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 2),
    backgroundColor: theme.palette.background.default,
  },

  formActions: {
    padding: theme.spacing(4, 0),
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
