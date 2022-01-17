import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import { AddRounded, CloseOutlined, RemoveRounded } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const CartItemMobile = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={className}>
      <Grid container spacing={2} className={classes.cartMobileWrapper}>
        <Grid item xs={4}>
          <Box className={classes.imgMobileWrapper}>
            <img
              src="https://template.hasthemes.com/norda/norda/assets/images/product/product-4.jpg"
              alt="test"
              className={classes.imageMobile}
            />
          </Box>
        </Grid>
        <Grid item xs={8} className={classes.cartItemMobile}>
          <Box className={classes.textMobileWrapper}>
            <Typography className={classes.titleMobile}>
              Norda Simple Backpack
            </Typography>
          </Box>
          <Box>
            <Box className={classes.textMobileWrapper}>
              <Typography className={classes.textMobile}>Price :</Typography>
              <Typography>$109.00</Typography>
            </Box>
            <Box className={classes.textMobileWrapper}>
              <Typography className={classes.textMobile}>Quantity :</Typography>
              <Box display="flex" alignItems="center">
                <IconButton size="small">
                  <RemoveRounded />
                </IconButton>
                <Typography className={classes.quantityMobile}>1</Typography>
                <IconButton size="small">
                  <AddRounded />
                </IconButton>
              </Box>
            </Box>

            <Box className={classes.textMobileWrapper}>
              <Typography className={classes.textMobile}>Subtotal :</Typography>
              <Typography className={classes.subTotalMobile}>
                $109.00
              </Typography>
            </Box>
          </Box>
        </Grid>
        <IconButton className={classes.closeButtonMobile}>
          <CloseOutlined />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default CartItemMobile;
