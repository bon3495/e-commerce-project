import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsApi from '../api/productsApi';
import {
  Breadcumbs,
  BreadcumbsSkeleton,
  Delivery,
  ImageTitle,
  Toolbar,
} from '../components';
import { titleConvert } from '../constants';
import useHttp from '../hook/useHttp';
import { ProductContent, ProductSkeleton } from '../features/Product/index';

const ProductPage = () => {
  const params = useParams();
  const { isLoading, sendRequest } = useHttp();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const handleDataResponse = data => {
      setProduct(data);
    };

    sendRequest(productsApi, handleDataResponse, params.productId, 'get');
  }, [params.productId, sendRequest]);

  return (
    <Toolbar>
      <ImageTitle>{titleConvert(params.categoryId)}</ImageTitle>
      {isLoading && <BreadcumbsSkeleton />}
      {!isLoading && (
        <Breadcumbs name={product.name} category={product.category} />
      )}
      {isLoading && <ProductSkeleton />}
      {!isLoading && <ProductContent product={product} />}
      <Delivery />
    </Toolbar>
  );
};

export default ProductPage;
