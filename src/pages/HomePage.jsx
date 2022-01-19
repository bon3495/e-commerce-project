import React from 'react';
import { Delivery } from '../components';
import { AllProducts, HomeCategories, Sliders } from '../features/HomePage';

const HomePage = () => {
  return (
    <>
      <Sliders />
      <HomeCategories />
      <AllProducts />
      <Delivery />
    </>
  );
};

export default HomePage;
