import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem, CartItemMobile, CartTotalSubmit } from '..';
import { selectProductsCartData } from '../../../store/selectors';
import useStyles from './styles';
import { cartActions } from '../../../store/slices/cartSlice';

const CartContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { productsCart, totalNumber, totalPrice } = useSelector(
    selectProductsCartData
  );
  const handleClear = () => {
    dispatch(cartActions.clearAllProducts());
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <form>
              <TableContainer component={Paper} className={classes.cartScreen}>
                <Table className={classes.table} aria-label="cart table">
                  <TableHead>
                    <TableRow>
                      {[
                        'Product',
                        'Until Price',
                        'Quantity',
                        'Subtotal',
                        'Action',
                      ].map((item, index) => (
                        <TableCell
                          key={index}
                          align="center"
                          className={classes.tableTitle}
                        >
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productsCart.map(product => (
                      <CartItem key={product.id} product={product} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {productsCart.map(product => (
                <CartItemMobile
                  key={product.id}
                  product={product}
                  className={classes.cartMobile}
                />
              ))}

              <Box className={classes.formActions}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/mens"
                    >
                      Continue Shopping
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClear}
                    >
                      Clear Cart
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CartTotalSubmit
              totalNumber={totalNumber}
              totalPriceProduct={totalPrice}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartContent;
