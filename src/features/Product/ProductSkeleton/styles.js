import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  skeletonContainer: {
    height: 0,
    overflow: 'hidden',
    paddingTop: '110%',
    position: 'relative',
    borderRadius: '4px',
  },

  skeletonSubContainer: {
    display: 'flex',
    marginLeft: '-12px',
    marginTop: '16px',
  },

  skeletonSub: {
    width: '25%',
    height: 0,
    overflow: 'hidden',
    paddingTop: '25%',
    position: 'relative',
    marginLeft: '12px',
    borderRadius: '4px',
  },

  SkeletonImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  SkeletonSubImg: {},
}));
