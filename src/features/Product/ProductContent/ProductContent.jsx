import { Box, Container, Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import styled from 'styled-components';
import { DetailItem, ProductForm, SizeChange } from '..';
import { calcNewPrice, mediumTablet, smallTablet } from '../../../constants';

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
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: flex;
  border_radius: 10px;
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
  color: #878787;
  text-decoration: line-through;
`;

const Desc = styled.div`
  color: #878787;
  line-height: 1.75;
`;

const DetailContainer = styled.div``;

const ProductContent = ({ product = {} }) => {
  const [rating, setRating] = useState(5);
  const {
    name,
    originPrice,
    discount,
    brand,
    orders,
    reviews,
    desc,
    productUrls,
  } = product;

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <NewGrid item xs={12} sm={6}>
            <ImgContainer>
              <Image src={productUrls[0]} alt={name} />
            </ImgContainer>
          </NewGrid>
          <NewGrid item xs={12} sm={6}>
            <InfoContainer>
              <Title>{name}</Title>
              <RatingContainer>
                <RatingDigit>
                  <Box component="fieldset" borderColor="transparent">
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(_, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </Box>
                  <Digit>{rating || 0}.0</Digit>
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

              <DetailContainer>
                <SizeChange />

                {/* <DetailItem title="Categories :" text="Woman, Dress, T-Shirt" /> */}
                <DetailItem title="Brand: " text={brand} />
              </DetailContainer>

              <ProductForm />
            </InfoContainer>
          </NewGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductContent;
