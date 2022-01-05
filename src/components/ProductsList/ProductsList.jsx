import React from 'react';
import styled from 'styled-components';
import { products } from '../../constants/fake-data';
import ProductItem from './ProductItem/ProductItem';

const Container = styled.div`
  padding: 30px 15px;
  /* padding: 30px 0; */
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: -30px;
  row-gap: 30px;
`;

const ProductsList = () => {
  return (
    <Container>
      <ProductsContainer>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default ProductsList;
