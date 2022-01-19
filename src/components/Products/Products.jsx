import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Product } from '..';
import useStyles from './styles';

const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <Box pt={2} pb={4} className={classes.container}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {products.map(product => (
                <Grid item xs={6} sm={4} md={3} key={product.id}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
