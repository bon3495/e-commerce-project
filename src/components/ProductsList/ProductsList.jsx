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

const TitleContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  &:after,
  &:before {
    position: absolute;
    content: '';
    width: 60px;
    height: 2px;
    background-color: #000;
  }
  &:before {
    top: 48%;
    left: -75px;
  }
  &:after {
    top: 48%;
    right: -75px;
  }
`;

const SubTitle = styled.h4`
  font-size: 14px;
  color: #878787;
  font-weight: normal;
  font-family: 'Libre Baskerville', serif;
  margin-top: 5px;
  letter-spacing: 0.5px;
  font-style: italic;
  line-height: 16px;
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
      <TitleContainer>
        <Title>Our Products</Title>
        <SubTitle>Top view in the week</SubTitle>
      </TitleContainer>
      <ProductsContainer>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default ProductsList;
