import { useDispatch } from 'react-redux';
import { cartActions } from '../store/slices/cartSlice';

const useChangeProduct = product => {
  const dispatch = useDispatch();

  const handleDecreaseNumber = () => {
    dispatch(cartActions.decreaseNumber(product.id));
  };

  const handleIncreaseNumber = () => {
    dispatch(cartActions.increaseNumber(product.id));
  };

  const handleRemoveProduct = () => {
    dispatch(cartActions.removeProduct(product.id));
  };

  return {
    handleDecreaseNumber,
    handleIncreaseNumber,
    handleRemoveProduct,
  };
};

export default useChangeProduct;
