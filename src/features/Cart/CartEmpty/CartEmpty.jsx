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
          src="http://amjpearls.com/assets/images/largeCartIcon.png"
          alt="empty cart"
          className={classes.cartImg}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/home"
        className={classes.emptyButton}
      >
        Continue Shopping
      </Button>
    </Container>
  );
};

export default CartEmpty;