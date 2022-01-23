import { Box, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productsApi from '../../../api/productsApi';
import {
  FilterBrand,
  FilterPrice,
  PaginationUI,
  Products,
  ProductsSkeleton,
  SortType,
  TitleContent,
  TitleSkeleton,
} from '../../../components';
import { LIMIT_PRODUCTS, scrollToProducts } from '../../../constants';
import useHttp from '../../../hook/useHttp';
import { ContainerStyled, DividerStyled, GridMarginLeft } from './styles';

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
    _sort: '',
    _order: '',
    name_link: '',
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
    window.scrollTo({
      top: scrollToProducts('products'),
      behavior: 'smooth',
    });
  };

  const handleChangeSortType = sortValue => {
    if (Object.keys(sortValue).length === 0) {
      setFilters(prevFilters => ({ ...prevFilters, _sort: '', _order: '' }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        _sort: sortValue._sort,
        _order: sortValue._order,
      }));
    }
  };

  const handleChangeBrands = newBrand => {
    if (!newBrand) {
      const newFilters = { ...filters };
      delete newFilters.brand;
      setFilters(newFilters);
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        brand: newBrand,
      }));
    }
  };

  const handleChangePrice = newPrice => {
    if (Object.keys(newPrice).length === 0) return;

    setFilters(prevFilters => ({
      ...prevFilters,
      ...newPrice,
    }));
  };

  return (
    <ContainerStyled>
      <Box pt={5} id="products">
        {isLoading && <TitleSkeleton />}
        {!isLoading && (
          <TitleContent subTitle="All products in shop">Products</TitleContent>
        )}
        <DividerStyled variant="middle" />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} sm={4} md={3}>
            <SortType onChangeSort={handleChangeSortType} />
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <FilterBrand
              onChangeBrand={handleChangeBrands}
              currentBrand={filters.brand || ''}
            />
          </Grid>

          <GridMarginLeft item xs={6} sm={4} md={3}>
            <FilterPrice onChangePrice={handleChangePrice} />
          </GridMarginLeft>
        </Grid>
      </Box>
      <DividerStyled variant="middle" />
      {isLoading && <ProductsSkeleton />}
      {!isLoading && <Products products={productsData} />}
      <PaginationUI
        limit={pagination._limit}
        page={pagination._page}
        total={pagination._totalRows}
        handleChangePagination={handleChangePagination}
      />
    </ContainerStyled>
  );
};

export default AllProducts;
