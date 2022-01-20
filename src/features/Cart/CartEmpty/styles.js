import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  cartImg: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },

  emptyButton: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10),
  },
}));
