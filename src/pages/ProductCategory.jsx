import React from 'react';
import { ProductsList, TitleContainer } from '../components';
import {
  Breadcumbs,
  Filters,
  ProductsPagination,
  TitleImage,
} from '../features/ProductCategory';

const ProductCategory = () => {
  return (
    <div>
      <TitleImage />
      <Breadcumbs />
      <TitleContainer subTitle="Go sporty this summer with this vintage navy">
        Blazer
      </TitleContainer>
      <Filters />
      <ProductsList />
      <ProductsPagination />
    </div>
  );
};

export default ProductCategory;
