import { Box, Button, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const CartEmpty = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Box>
        <img
          // src="http://amjpearls.com/assets/images/largeCartIcon.png"
          src="https://freepikpsd.com/file/2019/10/empty-cart-png-Transparent-Images.png"
          alt="empty cart"
          className={classes.cartImg}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/mens"
        className={classes.emptyButton}
      >
        Continue Shopping
      </Button>
    </Container>
  );
};

export default CartEmpty;
