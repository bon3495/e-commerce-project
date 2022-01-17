import { Button } from '@material-ui/core';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { mediumTablet } from '../../../constants';

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;29px 0px;
`;

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
  border-radius: 10px;
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
`;

const HomeCategory = ({ category }) => {
  return (
    <ListItem>
      <ImageContainer>
        <Image src={category.imageUrl} alt={category.title} />
      </ImageContainer>
      <Info>
        <InfoTitle>{category.title}</InfoTitle>
        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/category/${category.linkUrl}`}
          >
            Go Now!
          </Button>
        </ButtonContainer>
      </Info>
      <Outlet />
    </ListItem>
  );
};

export default HomeCategory;
