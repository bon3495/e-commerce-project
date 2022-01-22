import {
  Box,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import queryString from 'query-string';
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
import {
  ContainerStyled,
  DividerStyled,
  FormControlStyled,
  GridMarginLeft,
  InputBaseStyled,
  PaperFormStyled,
} from './styles';

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
    // setSortType(event.target.value);
    // const queryPrams = queryString.parse(event.target.value);

    // if (Object.keys(queryPrams).length === 0) {
    //   setFilters(prevFilters => ({ ...prevFilters, _sort: '', _order: '' }));
    // } else {
    //   setFilters(prevFilters => ({
    //     ...prevFilters,
    //     _sort: queryPrams._sort,
    //     _order: queryPrams._order,
    //   }));
    // }
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
            {/* <FormControlStyled variant="outlined">
              <InputLabel color="primary">Sort</InputLabel>
              <Select
                value={sortType}
                onChange={handleChangeSortType}
                label="Sort by"
                color="primary"
              >
                <MenuItem value="">
                  <em>Default</em>
                </MenuItem>
                <MenuItem value="_sort=orders&_order=desc">
                  Best Seller
                </MenuItem>
                <MenuItem value="_sort=reviews&_order=desc">
                  The Most Reviews
                </MenuItem>
                <MenuItem value="_sort=ratingValue&_order=desc">
                  Highest Rating
                </MenuItem>
                <MenuItem value="_sort=discount&_order=desc">
                  Highest Discount
                </MenuItem>
                <MenuItem value="_sort=newPrice&_order=desc">
                  Price High To Low
                </MenuItem>
                <MenuItem value="_sort=newPrice&_order=asc">
                  Price Low To High
                </MenuItem>
              </Select>
            </FormControlStyled> */}
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
          {/* <Grid item xs={6} sm={12} md={3}>
            <PaperFormStyled component="form">
              <InputBaseStyled placeholder="Search..." />
              <IconButton type="submit" aria-label="search">
                <Search />
              </IconButton>
            </PaperFormStyled>
          </Grid> */}
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
