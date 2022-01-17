import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  tableText: {
    fontSize: theme.spacing(2),
  },

  productInfo: {
    display: 'flex',
    alignItems: 'center',
  },

  imageBox: {
    width: '80px',
    marginRight: theme.spacing(2),
  },

  image: {
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
  },

  quantityText: {
    width: '100%',
    flex: 1,
    fontSize: theme.spacing(2),
  },

  imageMobile: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
  },

  cartMobileWrapper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
  },

  textMobileWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    [theme.breakpoints.up('480')]: {
      marginBottom: theme.spacing(1.5),
    },
  },

  titleMobile: {
    [theme.breakpoints.up('480')]: {
      fontSize: theme.spacing(2.5),
      fontWeight: '500',
    },
  },

  textMobile: {
    width: '80px',
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      // display: 'block',
    },
  },

  quantityMobile: {
    padding: theme.spacing(0, 2),
  },

  subTotalMobile: {
    fontSize: theme.spacing(2.5),
    color: theme.palette.secondary.main,
    fontWeight: '500',
  },

  closeButtonMobile: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));
