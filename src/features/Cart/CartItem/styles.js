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

  productTitle: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    // -webkit-line-clamp: 3;
    // -webkit-box-orient: vertical;
    // overflow: hidden;
    // display: -webkit-box;
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
    justifyContent: 'space-between',
    [theme.breakpoints.up('480')]: {
      marginBottom: theme.spacing(1.5),
    },
  },

  titleMobile: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    paddingRight: '40px',
    [theme.breakpoints.up('400')]: {
      fontSize: theme.spacing(2),
    },
    [theme.breakpoints.up('480')]: {
      fontSize: theme.spacing(2.5),
      fontWeight: '500',
    },
  },

  textMobile: {
    // width: '60px',
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      // display: 'block',
    },
  },

  quantityMobile: {
    padding: theme.spacing(0, 1.5),
  },

  subTotalMobile: {
    fontSize: theme.spacing(2.5),
    // color: theme.palette.secondary.main,
    fontWeight: '500',
  },

  closeButtonMobile: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));
