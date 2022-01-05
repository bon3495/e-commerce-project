import { Button, IconButton } from '@material-ui/core';
import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const ProductTop = styled.div`
  position: relative;
  overflow: hidden;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: flex;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.3s linear;
  overflow: hidden;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: 10px;
  row-gap: 10px;
  z-index: 2;
`;

const ButtonWrap = styled.div`
  z-index: 2;
  transition: all 0.3s linear;
  width: 100%;
  padding: 0 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transform: translate(-50%, 20%);
`;

const ProductBottom = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 5px;
`;

const Title = styled.div`
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: center;
`;

const OriginPrice = styled.div`
  /* font-size: 14px; */
  color: #878787;
  text-decoration: line-through;
`;

const NewPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-right: 8px;
`;

const Container = styled.div`
  width: calc(25% - 30px);
  margin-left: 30px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover ${ButtonContainer} {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:hover ${ButtonWrap} {
    transform: translate(-50%, -40%);
    opacity: 1;
  }

  display: flex;
  flex-direction: column;
`;

const ProductItem = ({ product }) => {
  return (
    <Container>
      <ProductTop>
        <ImageWrap>
          <Image src={product.img} alt={product.name} />
        </ImageWrap>
        <ButtonContainer>
          <Socials>
            <IconButton size="small">
              <SearchOutlined />
            </IconButton>
            <IconButton size="small">
              <FavoriteBorderOutlined />
            </IconButton>
          </Socials>
          <ButtonWrap>
            <Button
              className="addButton"
              size="large"
              variant="contained"
              style={{ borderRadius: 20 }}
              fullWidth
            >
              Add To Cart
            </Button>
          </ButtonWrap>
        </ButtonContainer>
      </ProductTop>
      <ProductBottom>
        <Title>{product.name}</Title>
        <TotalPrice>
          <NewPrice>{product.price}</NewPrice>
          <OriginPrice>{product.originPrice}</OriginPrice>
        </TotalPrice>
      </ProductBottom>
    </Container>
  );
};

export default ProductItem;
