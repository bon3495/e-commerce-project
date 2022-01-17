import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import userReducer from './slices/userSlice';
import shopDataReducer from './slices/shopDataSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    shop: shopDataReducer,
  },
});

export default store;
