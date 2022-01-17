import { createSlice } from '@reduxjs/toolkit';
import { shopData } from '../../constants/fake-data';

const initialState = {
  categoriesData: shopData,
};

const shopDataSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
});

export default shopDataSlice.reducer;
