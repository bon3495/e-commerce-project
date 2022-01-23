import { Button } from '@material-ui/core';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { mediumTablet } from '../../../constants';

const Info = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const InfoTitle = styled.h4`
  color: white;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  transform: translateY(-30%);
  transition: all 0.3s linear;

  ${mediumTablet({
    fontSize: '30px',
  })}
`;

const ButtonContainer = styled.div`
  transform: translateY(100%);
  transition: all 0.3s linear;
  position: absolute;
`;

const ListItem = styled.div`
  position: relative;
  flex-shrink: 0;
  padding-top: 125%;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
`;

const HomeCategory = ({ category }) => {
  return (
    <>
      <ListItem imageUrl={category.imageUrl}>
        <Info>
          <InfoTitle>{category.title}</InfoTitle>
          <ButtonContainer>
            <Button
              component={Link}
              variant="contained"
              color="primary"
              size="large"
              to={`${category.routeName}`}
            >
              Go Now!
            </Button>
          </ButtonContainer>
        </Info>
        <Outlet />
      </ListItem>
    </>
  );
};

export default HomeCategory;
