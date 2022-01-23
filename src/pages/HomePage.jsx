import React from 'react';
import { Delivery, Toolbar } from '../components';
import { AllProducts, HomeCategories, Sliders } from '../features/HomePage';

const HomePage = () => {
  return (
    <Toolbar>
      <Sliders />
      <HomeCategories />
      <AllProducts />
      <Delivery />
    </Toolbar>
  );
};

export default HomePage;
