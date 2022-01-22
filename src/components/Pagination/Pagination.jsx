import { Box } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React from 'react';
import { calcPagination } from '../../constants';
import styled from 'styled-components';

const BoxContainer = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 30px 0 80px;
  /* position: absolute;
  bottom: 0; */
`;

const PaginationUI = ({ limit, page, total, handleChangePagination }) => {
  return (
    <BoxContainer>
      <Pagination
        count={calcPagination(total, limit)}
        page={page}
        shape="rounded"
        color="primary"
        onChange={handleChangePagination}
      />
    </BoxContainer>
  );
};

export default PaginationUI;
