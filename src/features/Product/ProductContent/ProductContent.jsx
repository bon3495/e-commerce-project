import { Box, Container, Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { DetailItem, ProductForm, SizeChange } from '..';
import { calcNewPrice, mediumTablet, smallTablet } from '../../../constants';
import { userIsLoginSelector } from '../../../store/selectors';
import { cartActions } from '../../../store/slices/cartSlice';

const NewGrid = styled(Grid)`
  ${smallTablet({
    maxWidth: '100%',
    flexBasis: '100%',
  })}
  ${mediumTablet({
    maxWidth: '50%',
    flexBasis: '50%',
  })}
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductImg = styled.div`
  border-radius: 4px;

  position: relative;
  padding-top: 110%;

  background-image: url(${props => props.productImg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Thumbnails = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;

const Thumbnail = styled.img`
  display: flex;
  width: 25%;
  height: auto;
  object-fit: cover;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  border: ${props =>
    props.thumbnail === props.selectThumbnail ? '1px solid black' : 'none'};
`;

const InfoContainer = styled.div`
  /* padding: 10px;

  ${mediumTablet({
    padding: '30px',
  })} */
`;

const Title = styled.h3`
  font-size: 24px;
  color: #222;
  font-weight: 700;
  margin-bottom: 10px;
`;

const RatingContainer = styled.div`
  display: flex;
`;

const RatingDigit = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
`;

const Digit = styled.div`
  font-weight: 500;
  position: relative;
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    transform: translateY(-50%);
    right: -18px;
    background-color: #bcbcbc;
    height: 18px;
    width: 1px;
  }
`;

const ReviewOrder = styled.div`
  display: flex;
  align-items: center;
`;

const Review = styled.div`
  font-size: 15px;
  margin-right: 10px;
`;

const Order = styled.div`
  font-size: 15px;
`;

const PriceContainer = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin: 8px 0 16px;
`;

const NewPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ec0101;
`;

const OriginPrice = styled.div`
  color: #222;
  text-decoration: line-through;
`;

const Desc = styled.div`
  color: #222;
  line-height: 1.75;
`;

const RatingStart = styled(Rating)`
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const ProductContent = ({ product }) => {
  const isLogin = useSelector(userIsLoginSelector);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    thumbnailUrls,
    name,
    reviews,
    orders,
    desc,
    brand,
    originPrice,
    discount,
    ratingValue,
    color,
  } = product;
  const [selectThumbnail, setSelectThumbnail] = useState(thumbnailUrls[0]);
  const dispatch = useDispatch();

  const handleAddToCart = number => {
    if (!isLogin) {
      navigate('/login', { state: { from: location }, replace: true });
      return;
    }

    const productData = {
      id: product.id,
      name: product.name,
      quantity: number,
      price: +calcNewPrice(product.originPrice, product.discount),
      imageUrl: product.imageUrl,
    };
    dispatch(cartActions.addProductToCart(productData));
  };

  return (
    <Box pt={3} pb={5}>
      <Container>
        <Grid container spacing={4}>
          <NewGrid item xs={12} sm={6}>
            <ImgContainer>
              <ProductImg productImg={selectThumbnail} />
              <Thumbnails>
                {thumbnailUrls.map((thumbnail, index) => (
                  <Thumbnail
                    onClick={() => setSelectThumbnail(thumbnail)}
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index + 1} of ${thumbnailUrls.length}`}
                    thumbnail={thumbnail}
                    selectThumbnail={selectThumbnail}
                  />
                ))}
              </Thumbnails>
            </ImgContainer>
          </NewGrid>
          <NewGrid item xs={12} sm={6}>
            <InfoContainer>
              <Title>{name}</Title>
              <RatingContainer>
                <RatingDigit>
                  <RatingStart
                    defaultValue={ratingValue}
                    precision={0.5}
                    readOnly
                  />
                  <Digit>{ratingValue.toFixed(1)}</Digit>
                </RatingDigit>
                <ReviewOrder>
                  <Review>{reviews} Reviews</Review>
                  <Order>{orders} Orders</Order>
                </ReviewOrder>
              </RatingContainer>
              <PriceContainer>
                <NewPrice>{`$${calcNewPrice(originPrice, discount)}`}</NewPrice>
                <OriginPrice>{`$${originPrice.toFixed(2)}`}</OriginPrice>
              </PriceContainer>
              <Desc>{desc.brand}</Desc>

              <Box>
                <SizeChange />
                <DetailItem title="Color :" text={color} />
                <DetailItem title="Brand :" text={brand} />
                <DetailItem title="About :" text={desc.about[0]} />
              </Box>

              <ProductForm onChangeNumber={handleAddToCart} />
            </InfoContainer>
          </NewGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductContent;
