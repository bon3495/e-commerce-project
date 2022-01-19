import { Box } from '@material-ui/core';
import React from 'react';
import { Products } from '../../../components';

const CategoryProducts = ({ products }) => {
  return (
    <Box>
      <Products products={products} />
    </Box>
  );
};

export default CategoryProducts;
