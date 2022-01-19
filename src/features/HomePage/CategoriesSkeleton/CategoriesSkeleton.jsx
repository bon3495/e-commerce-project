import { Container, Grid, Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import useStyles from './styles';

const CategoriesSkeleton = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={classes.skeletonContainer}>
            <Skeleton variant="rect" className={classes.skeletonLoader} />
          </div>
        </Grid>
        <Grid item sm={6} md={4} lg={3} className={classes.mobile}>
          <div className={classes.skeletonContainer}>
            <Skeleton variant="rect" className={classes.skeletonLoader} />
          </div>
        </Grid>
        <Grid item md={4} lg={3} className={classes.tablet}>
          <div className={classes.skeletonContainer}>
            <Skeleton variant="rect" className={classes.skeletonLoader} />
          </div>
        </Grid>
        <Grid item lg={3} className={classes.screen}>
          <div className={classes.skeletonContainer}>
            <Skeleton variant="rect" className={classes.skeletonLoader} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoriesSkeleton;
