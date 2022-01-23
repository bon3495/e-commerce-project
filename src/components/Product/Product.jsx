import { Button, IconButton, Typography } from '@material-ui/core';
import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import {
  calcNewPrice,
  largeHandset,
  mediumScreen,
  smallTablet,
} from '../../constants';
import { cartActions } from '../../store/slices/cartSlice';
import { userIsLoginSelector } from '../../store/selectors';

const ProductTop = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 100%;

  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  top: 15px;
  left: 15px;
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`;

const BoxFooter = styled.div`
  display: flex;
  align-items: center;
`;

const RatingStart = styled(Rating)`
  font-size: 1rem;
  ${mediumScreen({
    fontSize: '1.2rem',
  })}
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 8px;
`;

const OriginPrice = styled.div`
  font-size: 12px;
  color: #878787;
  text-decoration: line-through;
  ${smallTablet({
    fontSize: '14px',
  })}
`;

const NewPrice = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ec0101;

  ${smallTablet({
    fontSize: '18px',
  })}
`;

const Discount = styled(Typography)`
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(255, 212, 36, 0.8);
  padding: 12px 8px;
  color: #ee4d2d;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  font-size: 18px;
`;

const Orders = styled(Typography)`
  color: #878787;
  font-size: 14px;
  font-weight: 400;
  margin-left: 8px;
`;

const Container = styled(Link)`
  overflow: hidden;
  height: 100%;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover ${ButtonContainer} {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:hover ${ButtonWrap} {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  const curUser = useSelector(userSelector);
  const cartData = useSelector(selectProductsCartData);

  &:hover ${Image} {
    transform: scale(1.05);
  }

  &:hover .social-button {
    color: white;
  }

  display: flex;
  flex-direction: column;
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector(userIsLoginSelector);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const handleAddToCart = async e => {
    e.preventDefault();

    if (!isLogin) {
      navigate('/login', { state: { from: location } });
      return;
    }

    const productData = {
      id: product.id,
      name: product.name,
      quantity: 1,
      price: +calcNewPrice(product.originPrice, product.discount),
      imageUrl: product.imageUrl,
    };
    dispatch(cartActions.addProductToCart(productData));
    dispatch(cartActions.toggleMiniCart(true));
  };

  return (
    <Container to={`/mens/${product.category}/${product.id}`}>
      <ProductTop imageUrl={product.imageUrl}>
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
              variant="contained"
              fullWidth
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </ButtonWrap>
        </ButtonContainer>
        <Discount>-{product.discount}%</Discount>
      </ProductTop>
      <ProductBottom>
        <Title>{product.name}</Title>

        <TotalPrice>
          <NewPrice>{`$${product.newPrice.toFixed(2)}`}</NewPrice>
          <OriginPrice>{`$${product.originPrice.toFixed(2)}`}</OriginPrice>
        </TotalPrice>
        <BoxFooter>
          <RatingStart
            defaultValue={product.ratingValue}
            precision={0.5}
            readOnly
          />
          <Orders>({product.orders})</Orders>
        </BoxFooter>
      </ProductBottom>
    </Container>
  );
};

export default Product;
