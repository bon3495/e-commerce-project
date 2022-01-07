import React from 'react';
import {
  Breadcumbs,
  Delivery,
  TitleContainer,
  TitleImage,
} from '../components';
import { CartContent } from '../features/CartContainer';

const Cart = () => {
  return (
    <div>
      <TitleImage>Cart Page</TitleImage>
      <Breadcumbs name="Cart" />
      <TitleContainer subTitle="Shop today's deals">
        Your Cart Items
      </TitleContainer>
      <CartContent />
      <Delivery />
    </div>
  );
};

export default Cart;
