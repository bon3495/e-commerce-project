import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { AddRounded, DeleteOutlined, RemoveRounded } from '@material-ui/icons';
import React from 'react';
import useChangeProduct from '../../hook/useChangeProduct';
import useStyles from './styles';

const MiniCartItem = ({ product }) => {
  const classes = useStyles();
  const { handleDecreaseNumber, handleIncreaseNumber, handleRemoveProduct } =
    useChangeProduct(product);

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src={product.imageUrl} alt={product.name} />
      </ListItemAvatar>

      <ListItemText
        primary={product.name}
        className={classes.text}
        secondary={
          <Box className={classes.subTextContainer} component="span">
            <Box display="flex" alignItems="center" component="span">
              <IconButton size="small" onClick={handleDecreaseNumber}>
                <RemoveRounded />
              </IconButton>
              <Typography className={classes.quantityText} component="span">
                {product.quantity}
              </Typography>
              <IconButton size="small" onClick={handleIncreaseNumber}>
                <AddRounded />
              </IconButton>
            </Box>
            <Typography
              component="span"
              className={classes.price}
              color="textPrimary"
            >
              {`$${product.subTotalPrice.toFixed(2)}`}
            </Typography>
          </Box>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" size="small" onClick={handleRemoveProduct}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MiniCartItem;
