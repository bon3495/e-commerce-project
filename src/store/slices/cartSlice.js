import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalNumber: 0,
  totalPrice: 0,
  productsCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      /*
            {
                name:
                img:
                price:
                quantity:
            }
        */
      const product = action.payload;
      const productExist = state.productsCart.find(
        prod => prod.id === product.id
      );

      if (productExist) {
        productExist.quantity += product.quantity;
        productExist.subTotalPrice += product.quantity * product.price;
        state.totalNumber += product.quantity;
      } else {
        state.productsCart.push(product);
        state.totalNumber++;
      }
      state.totalPrice += product.quantity * product.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
