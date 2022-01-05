import React from 'react';
import {
  Breadcumbs,
  ProductsList,
  TitleContainer,
  TitleImage,
} from '../components';
import { Filters, ProductsPagination } from '../features/ProductCategory';

const ProductCategory = () => {
  return (
    <div>
      <TitleImage />
      <Breadcumbs name="Blazer" />
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
