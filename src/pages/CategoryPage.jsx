import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsApi from '../api/productsApi';
import { Breadcumbs, Delivery, ImageTitle, ProductsList } from '../components';
import { LIMIT_PRODUCTS } from '../constants';
import useHttp from '../hook/useHttp';

const CategoryPage = () => {
  const params = useParams();

  const { isLoading, sendRequest } = useHttp();
  const [category, setCategory] = useState({});
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: LIMIT_PRODUCTS,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: LIMIT_PRODUCTS,
    routeName: params.categoryId,
  });

  useEffect(() => {
    const handleDataResponse = dataResponse => {
      setCategoryProducts(dataResponse.products);
      setPagination(dataResponse.pagination);
      setCategory({
        title: dataResponse.title,
        id: dataResponse.id,
      });
    };

    sendRequest(productsApi, handleDataResponse, filters, 'getAllWithCategory');
  }, [sendRequest, filters]);

  const handleChangePagination = (_, page) => {
    setFilters(prevState => ({ ...prevState, _page: page }));
  };

  return (
    <div>
      <ImageTitle>{category.title}</ImageTitle>
      <Breadcumbs name={category.title} />
      <ProductsList
        isLoading={isLoading}
        category={category}
        products={categoryProducts}
        pagination={pagination}
        onChangePagination={handleChangePagination}
        title={category.title}
        subTitle="Go sporty this summer with this vintage navy"
      />
      <Delivery />
    </div>
  );
};

export default CategoryPage;
