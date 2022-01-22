import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    // height: '1500px',
  },

  gridItem: {
    padding: '4px',
    [theme.breakpoints.up('480')]: {
      padding: '8px',
    },
  },
}));
