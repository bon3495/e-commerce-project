import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    width: '100%',
    height: '220px',
    display: 'flex',
    position: 'relative',
    // [theme.breakpoints.between('480', 'sm')]: {
    //   height: '300px',
    // },

    // [theme.breakpoints.between('sm', '840')]: {
    //   height: '360px',
    // },

    // [theme.breakpoints.between('840', 'md')]: {
    //   height: '560px',
    // },

    // [theme.breakpoints.between('md', 'lg')]: {
    //   height: '650px',
    // },

    // [theme.breakpoints.up('lg')]: {
    //   height: ({ NAV_HEIGHT }) => `calc(100vh - ${NAV_HEIGHT}px)`,
    // },

    [theme.breakpoints.up('480')]: {
      height: '300px',
    },

    [theme.breakpoints.up('sm')]: {
      height: '360px',
    },

    [theme.breakpoints.up('840')]: {
      height: '560px',
    },

    [theme.breakpoints.up('md')]: {
      height: '650px',
    },

    [theme.breakpoints.up('lg')]: {
      height: ({ NAV_HEIGHT }) => `calc(100vh - ${NAV_HEIGHT}px)`,
    },
  },

  arrow: {
    position: 'absolute',
    display: 'none',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#fff7f7',
    borderRadius: '50%',
    opacity: 0.5,
    transition: 'all 0.5s linear',
    zIndex: 2,
    '&:hover': {
      opacity: 1,
    },
    '&.left': {
      left: theme.spacing(1.5),
    },
    '&.right': {
      right: theme.spacing(1.5),
    },
    [theme.breakpoints.up('840')]: {
      display: 'flex',
    },
  },

  imageContainer: {
    height: '100%',
    width: '100%',
  },

  imgSlider: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));
