import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalNumber: 0,
  totalPrice: 0,
  productsCart: [],
  isShowMiniCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const productExist = state.productsCart.find(
        prod => prod.id === product.id
      );

      if (productExist) {
        productExist.quantity += product.quantity;
        productExist.subTotalPrice += product.quantity * product.price;
      } else {
        state.productsCart.push({
          ...product,
          subTotalPrice: +product.price * product.quantity,
        });
      }
      state.totalNumber += product.quantity;
      state.totalPrice += product.quantity * product.price;
    },

    decreaseNumber: (state, action) => {
      const id = action.payload;
      const productExist = state.productsCart.find(prod => prod.id === id);

      if (!productExist) return;

      if (productExist.quantity === 1) {
        state.productsCart = state.productsCart.filter(prod => prod.id !== id);
      } else {
        productExist.subTotalPrice -= productExist.price;
        productExist.quantity--;
      }

      state.totalNumber--;
      state.totalPrice -= productExist.price;
    },

    increaseNumber: (state, action) => {
      const id = action.payload;
      const productExist = state.productsCart.find(prod => prod.id === id);

      if (!productExist) return;

      productExist.quantity++;
      productExist.subTotalPrice += productExist.price;
      state.totalNumber++;
      state.totalPrice += productExist.price;
    },

    removeProduct: (state, action) => {
      const id = action.payload;
      const productExist = state.productsCart.find(prod => prod.id === id);

      if (!productExist) return;

      state.productsCart = state.productsCart.filter(prod => prod.id !== id);

      state.totalNumber -= productExist.quantity;
      state.totalPrice -= productExist.price * productExist.quantity;
    },

    clearAllProducts: state => {
      state.totalNumber = 0;
      state.totalPrice = 0;
      state.productsCart = [];
    },

    toggleMiniCart: (state, action) => {
      state.isShowMiniCart = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
