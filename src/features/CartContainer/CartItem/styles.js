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
}));
