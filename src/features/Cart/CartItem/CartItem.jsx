import {
  Box,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { AddRounded, DeleteOutlined, RemoveRounded } from '@material-ui/icons';
import React from 'react';
import useChangeProduct from '../../../hook/useChangeProduct';
import useStyles from './styles';

const CartItem = ({ product }) => {
  const classes = useStyles();
  const { handleDecreaseNumber, handleIncreaseNumber, handleRemoveProduct } =
    useChangeProduct(product);

  return (
    <TableRow>
      <TableCell className={classes.tableText} align="center">
        <Box className={classes.productInfo}>
          <Box className={classes.imageBox}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={classes.image}
            />
          </Box>
          <Typography className={classes.productTitle}>
            {product.name}
          </Typography>
        </Box>
      </TableCell>
      <TableCell className={classes.tableText} align="center">
        {`$${product.price}`}
      </TableCell>
      <TableCell className={classes.tableText} align="center">
        <Box display="flex" alignItems="center">
          <IconButton size="small" onClick={handleDecreaseNumber}>
            <RemoveRounded />
          </IconButton>
          <Typography className={classes.quantityText}>
            {product.quantity}
          </Typography>
          <IconButton size="small" onClick={handleIncreaseNumber}>
            <AddRounded />
          </IconButton>
        </Box>
      </TableCell>
      <TableCell className={classes.tableText} align="center">
        {`$${product.subTotalPrice.toFixed(2)}`}
      </TableCell>
      <TableCell className={classes.tableText} align="center">
        <IconButton onClick={handleRemoveProduct}>
          <DeleteOutlined />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
