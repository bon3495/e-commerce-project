import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import useStyles from './styles';

const TitleSkeleton = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Skeleton animation="wave" className={classes.skeletonTitle} />
      <Skeleton animation="wave" />
    </Box>
  );
};

export default TitleSkeleton;
