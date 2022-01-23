import React from 'react';
import { useSelector } from 'react-redux';
import {
  Breadcumbs,
  Delivery,
  TitleContent,
  ImageTitle,
  Toolbar,
} from '../components';
import { CartContent, CartEmpty } from '../features/Cart';
import { selectCartNumber } from '../store/selectors';

const CartPage = () => {
  const totalNumber = useSelector(selectCartNumber);
  return (
    <Toolbar>
      <ImageTitle>Cart Page</ImageTitle>
      <Breadcumbs name="Cart" />
      <TitleContent subTitle="Shop today's deals">Your Cart Items</TitleContent>
      {totalNumber === 0 && <CartEmpty />}
      {totalNumber !== 0 && <CartContent />}
      <Delivery />
    </Toolbar>
  );
};

export default CartPage;
