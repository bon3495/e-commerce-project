import { Box, Button, IconButton } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 50%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  display: flex;
  border_radius: 10px;
`;

const InfoContainer = styled.div`
  flex: 1;
  width: 50%;
  padding: 30px;
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

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0;
  column-gap: 30px;
`;

const QuantityContainer = styled.div`
  display: flex;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 6px;
  column-gap: 8px;
`;

const ButtonChange = styled.div``;

const QuantityInput = styled.input`
  width: 44px;
  border: none;
  outline: none;
  font-size: 20px;
  text-align: center;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const ButtonSubmit = styled.div``;

const DetailContainer = styled.div``;

const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const SizeTitle = styled.h6`
  font-size: 16px;
  color: #222;
  margin-right: 20px;
  font-weight: 500;
`;

const SizeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const SizeItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e3e4e9;
  width: 40px;
  height: 36px;
  transition: all 0.3s linear;
  color: ${props => (props.isClick ? '#fff' : '#222')};
  background-color: ${props => (props.isClick ? '#222' : '#fff')};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const DetailText = styled.p``;

const ProductContent = () => {
  const [rating, setRating] = useState(5);
  const [sizes, setSize] = useState([
    { name: 'XS', id: 1 },
    { name: 'S', id: 2 },
    { name: 'M', id: 3 },
    { name: 'L', id: 4 },
    { name: 'XL', id: 5 },
  ]);

  const handleChangeSize = id => {
    setSize(prevSizes =>
      prevSizes.map(size => ({
        ...size,
        isClick: size.id === id ? true : false,
      }))
    );
  };
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image
            src="https://claue.arrowtheme.com/media/catalog/product/cache/2c6622467c9ab2c04bc1ee512df331fe/1/4/14759082921406855888_1.jpg"
            alt="Basic Joggin Shorts"
          />
        </ImgContainer>
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
            <SizeContainer>
              <SizeTitle>Size :</SizeTitle>
              <SizeList>
                {sizes.map(size => (
                  <SizeItem
                    key={size.id}
                    onClick={() => handleChangeSize(size.id)}
                    isClick={size.isClick}
                  >
                    {size.name}
                  </SizeItem>
                ))}
              </SizeList>
            </SizeContainer>

            <SizeContainer>
              <SizeTitle>Categories :</SizeTitle>
              <DetailText>Woman, Dress, T-Shirt</DetailText>
            </SizeContainer>

            <SizeContainer>
              <SizeTitle>Brand :</SizeTitle>
              <DetailText>Luxottica</DetailText>
            </SizeContainer>
          </DetailContainer>

          <FormContainer>
            <QuantityContainer>
              <ButtonChange>
                <IconButton size="small">
                  <Remove />
                </IconButton>
              </ButtonChange>
              <QuantityInput defaultValue="1" />
              <ButtonChange>
                <IconButton size="small">
                  <Add />
                </IconButton>
              </ButtonChange>
            </QuantityContainer>
            <ButtonSubmit>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                style={{ borderRadius: 6 }}
              >
                Add To Cart
              </Button>
            </ButtonSubmit>
          </FormContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductContent;
