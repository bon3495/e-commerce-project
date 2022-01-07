import React from 'react';
import styled from 'styled-components';
import { ProductContainer } from '..';

const Text = styled.p``;

const DetailItem = ({ title, text }) => {
  return (
    <ProductContainer title={title}>
      <Text>{text}</Text>
    </ProductContainer>
  );
};

export default DetailItem;
