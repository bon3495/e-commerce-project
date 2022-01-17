import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  totalCartContainer: {
    padding: theme.spacing(3),
    // backgroundColor: theme.palette.grey[100],
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },

  checkoutTitle: {
    fontSize: theme.spacing(2.5),
    fontWeight: 'bold',
  },

  divider: {
    margin: theme.spacing(1.5, 0),
  },

  shippingTitle: {
    margin: theme.spacing(0.5, 0, 1),
  },

  totalPriceText: {
    fontSize: theme.spacing(2.5),
    margin: theme.spacing(0.5, 0, 1.5),
    fontWeight: 'bold',
  },
}));
