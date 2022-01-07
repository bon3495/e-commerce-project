import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const Title = styled.h6`
  font-size: 16px;
  color: #222;
  margin-right: 20px;
  font-weight: 500;
`;

const ProductContainer = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default ProductContainer;
