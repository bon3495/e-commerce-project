import { Box, Container, Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import styled from 'styled-components';
import { DetailItem, FormContent, SizeConfig } from '..';
import { mediumTablet, smallTablet } from '../../../constants';

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

const ProductContent = () => {
  const [rating, setRating] = useState(5);

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <NewGrid item xs={12} sm={6}>
            <ImgContainer>
              <Image
                src="https://claue.arrowtheme.com/media/catalog/product/cache/2c6622467c9ab2c04bc1ee512df331fe/1/4/14759082921406855888_1.jpg"
                alt="Basic Joggin Shorts"
              />
            </ImgContainer>
          </NewGrid>
          <NewGrid item xs={12} sm={6}>
            <InfoContainer>
              <Title>Basic Joggin Shorts</Title>
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
                  <Review>26 Reviews</Review>
                  <Order>242 Orders</Order>
                </ReviewOrder>
              </RatingContainer>
              <PriceContainer>
                <NewPrice>$75.00</NewPrice>
                <OriginPrice>$90.00</OriginPrice>
              </PriceContainer>
              <Desc>
                Go sporty this summer with this vintage navy and white striped
                v-neck t-shirt from the Nike. Perfect for pairing with denim and
                white kicks for a stylish sporty vibe.
              </Desc>

              <DetailContainer>
                <SizeConfig />

                <DetailItem title="Categories :" text="Woman, Dress, T-Shirt" />
                <DetailItem title="Brand :" text="Luxottica" />
              </DetailContainer>

              <FormContent />
            </InfoContainer>
          </NewGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductContent;
