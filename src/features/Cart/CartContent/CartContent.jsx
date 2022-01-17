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
import { Link } from 'react-router-dom';
import { CartItem, CartItemMobile, CartTotalSubmit } from '..';
import useStyles from './styles';

const CartContent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('standard');

  const handleChange = event => {
    setValue(event.target.value);
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
                        <TableCell key={index} align="center">
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Product item */}
                    <CartItem />
                    <CartItem />
                  </TableBody>
                </Table>
              </TableContainer>

              <CartItemMobile className={classes.cartMobile} />

              <Box className={classes.formActions}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to="/home"
                    >
                      Continue Shopping
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      Clear Cart
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <CartTotalSubmit value={value} handleChange={handleChange} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartContent;
