import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';

const CartTotalSubmit = ({ totalNumber, totalPriceProduct }) => {
  const classes = useStyles();
  const [deliveryCost, setDeliveryCost] = useState(30);
  const totalPrice = totalPriceProduct + deliveryCost;

  const handleChange = e => {
    setDeliveryCost(+e.target.value);
  };

  return (
    <Box className={classes.totalCartContainer}>
      <Box>
        <Typography className={classes.checkoutTitle}>Cart Total</Typography>

        <Divider className={classes.divider} />

        <Box className={classes.totalQuantity}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography>Total Products</Typography>
            </Grid>
            <Grid item>
              <Typography>{totalNumber}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider className={classes.divider} />

        <form>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.shippingTitle}>
              Choose your shipping options
            </FormLabel>
            <RadioGroup value={deliveryCost} onChange={handleChange}>
              <FormControlLabel
                checked={deliveryCost === 30}
                value={30}
                control={<Radio />}
                label="Standard ($30.00)"
              />
              <FormControlLabel
                checked={deliveryCost === 50}
                value={50}
                control={<Radio />}
                label="Express ($50.00)"
              />
            </RadioGroup>
          </FormControl>
        </form>

        <Divider className={classes.divider} />

        <Box>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography className={classes.totalPriceText}>
                Total Price
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.totalPriceText} color="secondary">
                {`$${totalPrice.toFixed(2)}`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" color="primary" fullWidth size="large">
          Proceed To Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartTotalSubmit;
