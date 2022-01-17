import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesSection } from '../../../store/selectors';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const CategoryFilters = ({ title }) => {
  const classes = useStyles();
  const categories = useSelector(selectCategoriesSection);

  return (
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
  );
};

export default CategoryFilters;
