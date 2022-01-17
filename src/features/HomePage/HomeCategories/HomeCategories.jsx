import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { TitleContent } from '../../../components';
import { selectCategoriesSection } from '../../../store/selectors';
// import { categories } from '../../../constants/fake-data';
import Category from './HomeCategory';

const HomeCategories = () => {
  const categories = useSelector(selectCategoriesSection);

  return (
    <Box pt={3} pb={4}>
      <TitleContent subTitle="All categories">Categories</TitleContent>
      <Box>
        <Container>
          <Grid container spacing={2}>
            {categories.map(category => (
              <Grid key={category.id} item xs={6} sm={4} md={3} lg>
                <Category category={category} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeCategories;
