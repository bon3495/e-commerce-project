import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10, 0),
  },

  wrapper: {
    padding: theme.spacing(5, 7),
    position: 'relative',
  },

  avatarContainer: {
    columnGap: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },

  avatar: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
  },

  title: {},
}));
