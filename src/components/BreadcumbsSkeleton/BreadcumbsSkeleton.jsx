import { Skeleton } from '@material-ui/lab';
import React from 'react';
import useStyles from './styles';

const BreadcumbsSkeleton = () => {
  const classes = useStyles();
  return <Skeleton animation="wave" className={classes.skeletonLoader} />;
};

export default BreadcumbsSkeleton;
