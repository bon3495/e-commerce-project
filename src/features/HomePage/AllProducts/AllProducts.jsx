import { Box, Button, Grid, InputBase } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  ImageNotFound,
  PageNotFound,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SkeletonStyled,
} from './styles';

const AllProducts = () => {
  const [productsData, setProductsData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 1,
    _totalRows: 1,
  });

  const [brands, setBrands] = useState([]);
  const { isLoading, sendRequest } = useHttp();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: +params._page || 1,
      _limit: +params._limit || LIMIT_PRODUCTS,
    };
  }, [location.search]);

  // const [filters, setFilters] = useState({
  //   _page: 1,
  //   _limit: LIMIT_PRODUCTS,
  //   _sort: '',
  //   _order: '',
  //   name_link: '',
  // });
  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: +queryParams._page || 1,
  //   _limit: +queryParams._limit || LIMIT_PRODUCTS,
  // }));

  // useEffect(() => {
  //   navigate({
  //     pathname: location.pathname,
  //     search: queryString.stringify(filters),
  //   });
  // }, [filters, navigate, location.pathname]);

  const scrollTo = () =>
    window.scrollTo({
      top: scrollToProducts('products'),
      behavior: 'smooth',
    });

  useEffect(() => {
    const handleData = dataResult => {
      const { data, pagination } = dataResult;
      setProductsData(data);
      setPagination(pagination);
    };
    const handleBrands = data => {
      setBrands(data);
    };
    sendRequest(productsApi, handleData, queryParams, 'getAll');
    sendRequest(productsApi, handleBrands, {}, 'getBrands');
  }, [sendRequest, queryParams]);

  const handleChangePagination = (_, page) => {
    // setFilters(prevState => ({ ...prevState, _page: page }));
    navigate({
      pathname: location.pathname,
      search: queryString.stringify({ ...queryParams, _page: page }),
    });
    scrollTo();
  };

  const handleChangeSortType = sortValue => {
    if (Object.keys(sortValue).length === 0) {
      // setFilters(prevFilters => ({ ...prevFilters, _sort: '', _order: '' }));

      navigate({
        pathname: location.pathname,
        search: queryString.stringify({
          ...queryParams,
          _sort: '',
          _order: '',
        }),
      });
    } else {
      // setFilters(prevFilters => ({
      //   ...prevFilters,
      //   _sort: sortValue._sort,
      //   _order: sortValue._order,
      // }));
      navigate({
        pathname: location.pathname,
        search: queryString.stringify({
          ...queryParams,
          _sort: sortValue._sort,
          _order: sortValue._order,
        }),
      });
    }

    scrollTo();
  };

  const handleChangeBrands = newBrand => {
    if (!newBrand) {
      const newParams = { ...queryParams };
      if (newParams.hasOwnProperty('brand')) delete newParams.brand;
      // setFilters(newParams);
      navigate({
        pathname: location.pathname,
        search: queryString.stringify(newParams),
      });
    } else {
      // setFilters(prevFilters => ({
      //   ...prevFilters,
      //   brand: newBrand,
      //   _page: 1,
      // }));

      navigate({
        pathname: location.pathname,
        search: queryString.stringify({
          ...queryParams,
          brand: newBrand,
          _page: 1,
        }),
      });
    }

    scrollTo();
  };

  const handleChangePrice = newPrice => {
    if (Object.keys(newPrice).length === 0) return;

    // setFilters(prevFilters => ({
    //   ...prevFilters,
    //   ...newPrice,
    //   _page: 1,
    // }));
    navigate({
      pathname: location.pathname,
      search: queryString.stringify({ ...queryParams, ...newPrice, _page: 1 }),
    });
    scrollTo();
  };

  const [searchInput, setSearchInput] = useState('');

  const handleChangeSearch = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmitSearch = e => {
    e.preventDefault();
    navigate({
      pathname: location.pathname,
      search: queryString.stringify({
        ...queryParams,
        q: searchInput,
        _page: 1,
      }),
    });

    setSearchInput('');
    scrollTo();
  };

  return (
    <ContainerStyled>
      <Box pt={5} id="products">
        {isLoading && <TitleSkeleton />}
        {!isLoading && (
          <TitleContent subTitle="All products in shop">Products</TitleContent>
        )}
        <DividerStyled variant="middle" />

        {isLoading && (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4} md={3}>
              <SkeletonStyled variant="rect" />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <SkeletonStyled variant="rect" />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <SkeletonStyled variant="rect" />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <SkeletonStyled variant="rect" />
            </Grid>
          </Grid>
        )}

        {!isLoading && (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4} md={3}>
              <SortType
                onChangeSort={handleChangeSortType}
                currentSort={
                  queryString.stringify({
                    _order: queryParams._order,
                    _sort: queryParams._sort,
                  }) || ''
                }
              />
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <FilterBrand
                onChangeBrand={handleChangeBrands}
                currentBrand={queryParams.brand}
                brands={brands}
              />
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <FilterPrice onChangePrice={handleChangePrice} />
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <SearchContainer onSubmit={handleSubmitSearch}>
                <SearchInput>
                  <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchInput}
                    onChange={handleChangeSearch}
                  />
                </SearchInput>

                <SearchIcon type="submit">
                  <SearchOutlined />
                </SearchIcon>
              </SearchContainer>
            </Grid>
          </Grid>
        )}
      </Box>
      <DividerStyled variant="middle" />
      {isLoading && <ProductsSkeleton />}
      {!isLoading && productsData.length === 0 && (
        <PageNotFound>
          <ImageNotFound
            src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
            alt="Page not found"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </PageNotFound>
      )}
      {!isLoading && productsData.length > 0 && (
        <Products products={productsData} />
      )}
      {productsData.length > 0 && (
        <PaginationUI
          limit={pagination._limit}
          page={pagination._page}
          total={pagination._totalRows}
          handleChangePagination={handleChangePagination}
        />
      )}
    </ContainerStyled>
  );
};

export default AllProducts;
