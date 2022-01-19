import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  skeletonContainer: {
    height: 0,
    overflow: 'hidden',
    paddingTop: '100%',
    position: 'relative',
  },

  skeletonLoader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  skeletonTitle: {
    height: '46px',
  },

  skeletonSubTitle: {
    marginLeft: 'auto',
    height: '36px',
  },
}));
