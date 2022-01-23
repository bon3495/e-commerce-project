import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Toolbar } from '../components';

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 60px;
`;

const ButtonStyled = styled(Button)`
  margin: 50px 0;
`;

const PageNotFound = () => {
  return (
    <Toolbar>
      <NotFound>
        <Image
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="Page not found"
        />

        <ButtonStyled
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Go Home
        </ButtonStyled>
      </NotFound>
    </Toolbar>
  );
};

export default PageNotFound;
