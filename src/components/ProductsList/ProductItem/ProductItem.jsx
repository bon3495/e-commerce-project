import { Button, IconButton } from '@material-ui/core';
import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { largeHandset } from '../../../constants';

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
  transition: all 0.3s linear;
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
  top: 20px;
  left: 20px;
  row-gap: 10px;
  z-index: 2;
`;

const ButtonWrap = styled.div`
  z-index: 2;
  transition: all 0.3s linear;
  width: 100%;
  padding: 0 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transform: translate(-50%, 20%);

  ${largeHandset({
    padding: '0 30px',
  })}
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
  color: #ec0101;
`;

const Container = styled(Link)`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover ${ButtonContainer} {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:hover ${ButtonWrap} {
    transform: translate(-50%, 0);
    opacity: 1;
  }

  &:hover ${Image} {
    transform: scale(1.05);
  }

  &:hover .social-button {
    color: white;
  }

  display: flex;
  flex-direction: column;
`;

const ProductItem = ({ product }) => {
  const handleAddToCart = e => {
    e.preventDefault();
  };

  return (
    <Container to={`/product/${product.id}`}>
      <ProductTop>
        <ImageWrap>
          <Image src={product.img} alt={product.name} />
        </ImageWrap>
        <ButtonContainer>
          <Socials>
            <IconButton
              className="social-button"
              size="small"
              onClick={handleAddToCart}
            >
              <SearchOutlined />
            </IconButton>
            <IconButton
              className="social-button"
              size="small"
              onClick={handleAddToCart}
            >
              <FavoriteBorderOutlined />
            </IconButton>
          </Socials>
          <ButtonWrap>
            <Button
              className="addButton"
              // size="large"
              variant="contained"
              fullWidth
              // endIcon={<AddShoppingCartOutlined />}
              onClick={handleAddToCart}
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
