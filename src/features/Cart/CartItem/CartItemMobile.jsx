import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import { AddRounded, CloseOutlined, RemoveRounded } from '@material-ui/icons';
import React from 'react';
import useChangeProduct from '../../../hook/useChangeProduct';
import useStyles from './styles';

const CartItemMobile = ({ className, product }) => {
  const classes = useStyles();
  const { handleDecreaseNumber, handleIncreaseNumber, handleRemoveProduct } =
    useChangeProduct(product);
  return (
    <Box className={className}>
      <Grid container spacing={2} className={classes.cartMobileWrapper}>
        <Grid item xs={4}>
          <Box className={classes.imgMobileWrapper}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={classes.imageMobile}
            />
          </Box>
        </Grid>
        <Grid item xs={8} className={classes.cartItemMobile}>
          <Box className={classes.textMobileWrapper}>
            <Typography className={classes.titleMobile}>
              {product.name}
            </Typography>
          </Box>
          <Box>
            <Box className={classes.textMobileWrapper}>
              {/* <Typography className={classes.textMobile}>Price :</Typography> */}
              <Typography>{`$${product.price}`}</Typography>
            </Box>
            <Box className={classes.textMobileWrapper}>
              {/* <Typography className={classes.textMobile}>Quantity :</Typography> */}
              <Box display="flex" alignItems="center">
                <IconButton size="small" onClick={handleDecreaseNumber}>
                  <RemoveRounded />
                </IconButton>
                <Typography className={classes.quantityMobile}>
                  {product.quantity}
                </Typography>
                <IconButton size="small" onClick={handleIncreaseNumber}>
                  <AddRounded />
                </IconButton>
              </Box>
            </Box>

            <Box className={classes.textMobileWrapper}>
              <Typography className={classes.textMobile}>Subtotal</Typography>
              <Typography className={classes.subTotalMobile}>
                {`$${product.subTotalPrice.toFixed(2)}`}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <IconButton
          className={classes.closeButtonMobile}
          onClick={handleRemoveProduct}
        >
          <CloseOutlined />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default CartItemMobile;
