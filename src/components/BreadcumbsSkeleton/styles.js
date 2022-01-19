import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '75%',
    margin: '30px auto',
    [theme.breakpoints.up('400')]: {
      width: '65%',
    },
    [theme.breakpoints.up('600')]: {
      width: '50%',
    },
    [theme.breakpoints.up('760')]: {
      width: '30%',
    },

    [theme.breakpoints.up('1024')]: {
      width: '25%',
    },
  },

  skeletonLoader: {
    height: '50px',
    marginBottom: '40px',
  },
}));
