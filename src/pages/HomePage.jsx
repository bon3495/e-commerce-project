import React from 'react';
import { TitleContainer } from '../components';
import {
  ButtonShowMore,
  Categories,
  Delivery,
  ProductsList,
  Sliders,
} from '../features/HomePage';

const HomePage = () => {
  return (
    <div>
      <Sliders />
      <Categories />
      <TitleContainer subTitle="Top view in the week">
        OUR PRODUCTS
      </TitleContainer>
      <ProductsList />
      <ButtonShowMore />
      <Delivery />
    </div>
  );
};

export default HomePage;
