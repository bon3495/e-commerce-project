import React from 'react';
import { Breadcumbs, Delivery, TitleContent, ImageTitle } from '../components';
import { CartContent } from '../features/Cart';

const CartPage = () => {
  return (
    <div>
      <ImageTitle>Cart Page</ImageTitle>
      <Breadcumbs name="Cart" />
      <TitleContent subTitle="Shop today's deals">Your Cart Items</TitleContent>
      <CartContent />
      <Delivery />
    </div>
  );
};

export default CartPage;
