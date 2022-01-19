import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesSection } from '../../../store/selectors';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const CategoryFilters = ({ title }) => {
  const classes = useStyles();
  const categories = useSelector(selectCategoriesSection);
  const [brand, setBrand] = useState('Brand');
  const [open, setOpen] = useState(false);

  const handleChange = event => {
    console.log(event.target.value);
    setBrand(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Box className={classes.root}>
        <Typography className={classes.title}>Product Group</Typography>
        {categories.map(category => (
          <Box className={classes.filtersBtnWrapper} key={category.id}>
            <Button
              component={Link}
              to={`/category/${category.linkUrl}`}
              className={`${classes.filtersBtn} ${
                category.linkUrl === title ? 'active' : ''
              }`}
            >
              {category.title}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryFilters;
