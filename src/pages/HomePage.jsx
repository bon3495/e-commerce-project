import React from 'react';
import { Delivery } from '../components';
import { HomeCategories, Sliders } from '../features/HomePage';

const HomePage = () => {
  return (
    <>
      <Sliders />
      <HomeCategories />
      <Delivery />
    </>
  );
};

export default HomePage;
