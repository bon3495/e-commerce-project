import { createSelector } from 'reselect';

export const userSelector = state => state.user.user;

export const userErrorSelector = state => state.user.error;

export const userIsLoadingSelector = state => state.user.isLoading;

export const userIsLoginSelector = state => state.user.isLogin;

const selectCategories = state => state.categories;
export const selectCategoriesSection = createSelector(
  [selectCategories],
  categories => categories.categories
);

const selectShop = state => state.shop.categoriesData;

export const selectShopData = routeName =>
  createSelector([selectShop], data => data[routeName]);

export const selectShopDataArr = createSelector([selectShop], data =>
  data ? Object.keys(data).map(key => data[key]) : []
);

const selectCart = state => state.cart.totalNumber;

export const selectCartData = createSelector(
  [selectCart],
  totalNumber => totalNumber
);
