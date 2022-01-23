import { makeStyles } from '@material-ui/core';
import { NAV_HEIGHT } from '../../constants';

export default makeStyles(theme => ({
  root: {
    top: ({ showNavbar }) => (showNavbar ? '0' : `-${NAV_HEIGHT}px`),
    transition: 'all 0.3s linear',
  },
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.black,
  },
  navbarLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoHome: {
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    display: 'block',

    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.spacing(3),

    fontFamily: `Libre Baskerville, serif`,
    // },
  },

  logoSm: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },

  search: {
    alignItems: 'center',
    borderRadius: theme.spacing(10),
    backgroundColor: theme.palette.grey[200],
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
    width: '35%',
    display: 'flex',

    [theme.breakpoints.down('xs')]: {
      display: ({ openSearchMobile }) => (openSearchMobile ? 'flex' : 'none'),
      width: '80%',
    },
  },
  searchInput: {
    flex: 1,
    paddingRight: theme.spacing(3),
    // color: theme.palette.primary.contrastText,
    color: theme.palette.common.black,
    display: 'block',
  },

  menuList: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: ({ openSearchMobile }) => (openSearchMobile ? 'none' : 'flex'),
    },
  },

  userDesktop: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  menuMobile: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  searchCloseButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  iconsMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  cartButton: {},

  cartContainer: {
    position: 'relative',
  },

  miniCart: {
    position: 'absolute',
    width: '120px',
    right: 0,
    top: '100%',
    background: 'blue',
    display: 'flex',
    flexDirection: 'column',
  },

  menuItem: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(3),
    cursor: 'pointer',
    // '&:hover': {
    //   color: #3f51b5,
    // }
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'inline-flex',
    // },
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

  offset: theme.mixins.toolbar,
}));
