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
import { CartItem, CartTotalSubmit } from '..';
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
          <Grid item xs={8}>
            <Box>
              <form>
                <TableContainer component={Paper}>
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
                    </TableBody>
                  </Table>
                </TableContainer>
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
            </Box>
          </Grid>
          <Grid item xs={4}>
            <CartTotalSubmit value={value} handleChange={handleChange} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartContent;
