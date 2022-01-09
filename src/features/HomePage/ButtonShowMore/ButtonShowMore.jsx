import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 16px 0 50px;
  display: flex;
  justify-content: center;
`;

const ButtonShowMore = () => {
  return (
    <Container>
      <Button variant="contained" color="primary" size="small">
        Show More
      </Button>
    </Container>
  );
};

export default ButtonShowMore;
