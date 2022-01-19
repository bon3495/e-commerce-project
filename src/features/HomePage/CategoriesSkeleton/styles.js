import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  skeletonContainer: {
    height: 0,
    overflow: 'hidden',
    paddingTop: '130%',
    position: 'relative',
    [theme.breakpoints.up('400')]: {
      paddingTop: '62.5%',
    },
    [theme.breakpoints.up('600')]: {
      paddingTop: '130%',
    },
    [theme.breakpoints.up('740')]: {
      paddingTop: '84%',
    },
    [theme.breakpoints.up('960')]: {
      paddingTop: '93%',
    },
    [theme.breakpoints.up('1280')]: {
      paddingTop: '130%',
    },
  },

  skeletonLoader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  mobile: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  tablet: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  screen: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
}));
