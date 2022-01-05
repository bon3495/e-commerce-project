import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

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
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  transform: translateY(-30%);
  /* opacity: 0; */
  transition: all 0.3s linear;
  /* font-family: 'Libre Baskerville', serif; */
`;

const ButtonContainer = styled.div`
  /* opacity: 0; */
  transform: translateY(100%);
  transition: all 0.3s linear;
  left: 0;
  right: 0;
  padding: 0 30px;
  position: absolute;
`;

const ListItem = styled.div`
  width: calc(25% - 30px);
  margin-left: 30px;
  position: relative;
  flex-shrink: 0;
  /* &:hover ${Info} {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:hover ${ButtonContainer}, &:hover ${InfoTitle} {
    transform: translateY(0);
    opacity: 1;
  } */
`;

const Category = ({ category }) => {
  return (
    <ListItem key={category.id}>
      <ImageContainer>
        <Image src={category.img} alt={category.type} />
      </ImageContainer>
      <Info>
        <InfoTitle>{category.type}</InfoTitle>
        <ButtonContainer>
          <Button
            variant="contained"
            color="default"
            size="large"
            fullWidth
            style={{ borderRadius: 20 }}
          >
            Shop Now
          </Button>
        </ButtonContainer>
      </Info>
    </ListItem>
  );
};

export default Category;
