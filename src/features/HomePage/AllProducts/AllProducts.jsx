import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import productsApi from '../../../api/productsApi';
import { ProductsList } from '../../../components';
import { LIMIT_PRODUCTS } from '../../../constants';
import useHttp from '../../../hook/useHttp';

const BoxContainer = styled(Box)`
  /* position: relative;
  min-height: 1260px; */
`;

const AllProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 1,
    _totalRows: 1,
  });
  const { isLoading, sendRequest } = useHttp();
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: LIMIT_PRODUCTS,
  });

  useEffect(() => {
    const handleData = dataResult => {
      const { data, pagination } = dataResult;
      setProductsData(data);
      setPagination(pagination);
    };
    sendRequest(productsApi, handleData, filters, 'getAll');
  }, [sendRequest, filters]);

  const handleChangePagination = (_, page) => {
    setFilters(prevState => ({ ...prevState, _page: page }));
  };

  return (
    <BoxContainer>
      <ProductsList
        isLoading={isLoading}
        title="Products"
        products={productsData}
        pagination={pagination}
        onChangePagination={handleChangePagination}
        subTitle="All products in shop"
      />
    </BoxContainer>
  );
};

export default AllProducts;
