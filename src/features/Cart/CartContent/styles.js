import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 2),
    backgroundColor: theme.palette.background.default,
  },

  cartScreen: {
    display: 'none',
    [theme.breakpoints.up('740')]: {
      display: 'block',
    },
  },

  cartMobile: {
    display: 'block',
    [theme.breakpoints.up('740')]: {
      display: 'none',
    },
  },

  formActions: {
    padding: theme.spacing(4, 0),
    display: 'flex',
    justifyContent: 'space-between',
  },

  tableTitle: {
    minWidth: '100px',
  },
}));
