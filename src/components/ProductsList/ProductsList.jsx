import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { products } from '../../constants/fake-data';
import ProductItem from './ProductItem/ProductItem';

const ProductsList = () => {
  return (
    <Box pb={2}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item xs={6} sm={4} md={3} key={product.id}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsList;
