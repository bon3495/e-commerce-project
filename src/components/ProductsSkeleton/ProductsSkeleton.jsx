import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { LIMIT_PRODUCTS } from '../../constants';
import useStyles from './styles';

const ProductsSkeleton = () => {
  const classes = useStyles();
  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={2}>
        {Array.from(new Array(LIMIT_PRODUCTS)).map((item, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <div className={classes.skeletonContainer}>
              <Skeleton variant="rect" className={classes.skeletonLoader} />
            </div>
            <Skeleton className={classes.skeletonTitle} />
            <Skeleton width="50%" className={classes.skeletonSubTitle} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsSkeleton;
