import React from 'react';
import {
  PaginationUI,
  Products,
  ProductsSkeleton,
  TitleContent,
  TitleSkeleton,
} from '..';

const ProductsList = props => {
  const {
    isLoading,
    title,
    products,
    pagination,
    onChangePagination,
    subTitle,
  } = props;
  return (
    <>
      {isLoading && <TitleSkeleton />}
      {!isLoading && <TitleContent subTitle={subTitle}>{title}</TitleContent>}
      {isLoading && <ProductsSkeleton />}
      {!isLoading && <Products products={products} />}
      <PaginationUI
        limit={pagination._limit}
        page={pagination._page}
        total={pagination._totalRows}
        handleChangePagination={onChangePagination}
      />
    </>
  );
};

export default ProductsList;
