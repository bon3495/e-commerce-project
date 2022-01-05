import React from 'react';
import { Breadcumbs, Delivery, TitleImage } from '../components';
import { ProductContent } from '../features/ProductDetail';

const ProductDetail = () => {
  return (
    <div>
      <TitleImage />
      <Breadcumbs name="Basic Joggin Shorts" />
      <ProductContent />
      <Delivery />
    </div>
  );
};

export default ProductDetail;
