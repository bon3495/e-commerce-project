import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { CategoryFilters, Product } from '..';
import { largeTablet } from '../../../constants';

const ResponseFilters = styled(Grid)`
  display: none;
  ${largeTablet({
    display: 'block',
  })};
`;

const Products = ({ products, routeName }) => {
  return (
    <Box pt={2} pb={4}>
      <Container>
        <Grid container spacing={2}>
          <ResponseFilters item md={3}>
            <CategoryFilters title={routeName} />
          </ResponseFilters>
          <Grid item xs={12} md={9}>
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
