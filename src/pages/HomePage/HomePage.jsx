import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import ProductsList from '../../components/ProductsList/ProductsList';
import Sliders from '../../components/Sliders/Sliders';

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Sliders />
      <Categories />
      <ProductsList />
    </div>
  );
};

export default HomePage;
