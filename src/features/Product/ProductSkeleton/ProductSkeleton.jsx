import { Box, Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import styled from 'styled-components';
import { mediumTablet, smallTablet } from '../../../constants';
import useStyles from './styles';

const NewGrid = styled(Grid)`
  ${smallTablet({
    maxWidth: '100%',
    flexBasis: '100%',
  })}
  ${mediumTablet({
    maxWidth: '50%',
    flexBasis: '50%',
  })}
`;

const ProductSkeleton = () => {
  const classes = useStyles();
  return (
    <Box pt={3} pb={5}>
      <Container>
        <Grid container spacing={4}>
          <NewGrid item xs={12} sm={6}>
            <div className={classes.skeletonContainer}>
              <Skeleton variant="rect" className={classes.SkeletonImg} />
            </div>
            <Box className={classes.skeletonSubContainer}>
              {Array.from(new Array(4)).map((_, index) => (
                <div className={classes.skeletonSub} key={index}>
                  <Skeleton variant="rect" className={classes.SkeletonImg} />
                </div>
              ))}
            </Box>
          </NewGrid>
          <NewGrid item xs={12} sm={6}>
            <Skeleton variant="rect" width="100%" height={58} />
            <Skeleton variant="text" height={50} />
            <Skeleton variant="text" width="30%" height={30} />
            <div>
              <Skeleton variant="rect" width="100%" height={300} />
            </div>
          </NewGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductSkeleton;
