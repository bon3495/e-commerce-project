import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectProductsCartData,
  selectShowMiniCart,
} from '../../store/selectors';
import { cartActions } from '../../store/slices/cartSlice';
import MiniCartItem from './MiniCartItem';
import useStyles from './styles';

const MiniCart = () => {
  const classes = useStyles();
  const isShow = useSelector(selectShowMiniCart);
  const { productsCart, totalNumber, totalPrice } = useSelector(
    selectProductsCartData
  );
  const dispatch = useDispatch();
  const toggleDrawer = boolean => {
    dispatch(cartActions.toggleMiniCart(boolean));
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={isShow}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      <Box className={classes.titleContainer}>
        <Typography>Your Cart</Typography>
        <IconButton
          size="small"
          className={classes.exitButton}
          onClick={() => toggleDrawer(false)}
        >
          <Close />
        </IconButton>
      </Box>
      {productsCart.length === 0 && (
        <Box className={classes.emptyCart}>
          <img
            className={classes.emptyImg}
            // src="http://amjpearls.com/assets/images/largeCartIcon.png"
            src="https://freepikpsd.com/file/2019/10/empty-cart-png-Transparent-Images.png"
            alt="empty cart"
          />
        </Box>
      )}
      {productsCart.length > 0 && (
        <List className={classes.listContainer}>
          {productsCart.map(product => (
            <Box key={product.id}>
              <MiniCartItem product={product} />
              <Divider variant="inset" component="li" />
            </Box>
          ))}
        </List>
      )}

      {totalPrice > 0 && (
        <Box className={classes.totalContainer}>
          <Typography className={classes.totalText}>Total Price</Typography>
          <Typography className={classes.total} color="secondary">
            {`$${totalPrice.toFixed(2)}`}
          </Typography>
        </Box>
      )}

      <Box className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/cart"
          className={classes.button}
          fullWidth
          onClick={() => toggleDrawer(false)}
        >
          View Cart
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.emptyButton}
          fullWidth
          onClick={() => toggleDrawer(false)}
        >
          Checkout
        </Button>
      </Box>
    </SwipeableDrawer>
  );
};

export default MiniCart;
