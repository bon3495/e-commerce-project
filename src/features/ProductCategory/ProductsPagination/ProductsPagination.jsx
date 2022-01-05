import React from 'react';
import { Pagination } from '@material-ui/lab';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 40px;
`;

const ProductsPagination = () => {
  return (
    <Container>
      <Pagination count={2} shape="rounded" />
    </Container>
  );
};

export default ProductsPagination;
