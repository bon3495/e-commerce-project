import {
  Box,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { AddRounded, DeleteOutlined, RemoveRounded } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const CartItem = () => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.tableText} align="center">
        <Box className={classes.productInfo}>
          <Box className={classes.imageBox}>
            <img
              src="https://template.hasthemes.com/norda/norda/assets/images/product/product-4.jpg"
              alt="test"
              className={classes.image}
            />
          </Box>
          <Typography>Norda Simple Backpack</Typography>
        </Box>
      </TableCell>
      <TableCell className={classes.tableText} align="center">
        $109.00
      </TableCell>
      <TableCell className={classes.tableText} align="center">
        <Box display="flex" alignItems="center">
          <IconButton size="small">
            <RemoveRounded />
          </IconButton>
          <Typography className={classes.quantityText}>1</Typography>
          <IconButton size="small">
            <AddRounded />
          </IconButton>
        </Box>
      </TableCell>
      <TableCell className={classes.tableText} align="center">
        $109.00
      </TableCell>
      <TableCell className={classes.tableText} align="center">
        <IconButton>
          <DeleteOutlined />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
