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
import React from 'react';
import useStyles from './styles';

const CartTotalSubmit = ({ value = '', handleChange }) => {
  const classes = useStyles();
  return (
    <Box className={classes.totalCartContainer}>
      <form>
        <Typography className={classes.checkoutTitle}>Cart Total</Typography>

        <Divider className={classes.divider} />

        <Box className={classes.totalQuantity}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography>Total Products</Typography>
            </Grid>
            <Grid item>
              <Typography>3</Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider className={classes.divider} />

        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend" className={classes.shippingTitle}>
              Choose your shipping options
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="freeship"
                control={<Radio />}
                label="Freeship"
              />
              <FormControlLabel
                value="standard"
                control={<Radio />}
                label="Standard ($30.00)"
              />
              <FormControlLabel
                value="express"
                control={<Radio />}
                label="Express ($50.00)"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Divider className={classes.divider} />

        <Box>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography className={classes.totalPriceText}>
                Total Price
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.totalPriceText}>
                $250.00
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" color="primary" fullWidth size="large">
          Proceed To Checkout
        </Button>
      </form>
    </Box>
  );
};

export default CartTotalSubmit;
