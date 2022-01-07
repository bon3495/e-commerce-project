import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import TitleContainer from '../../../components/TitleContainer/TitleContainer';
import { categories } from '../../../constants/fake-data';
import Category from './Category';

const Categories = () => {
  return (
    <Box pt={3}>
      <TitleContainer subTitle="All categories">Categories</TitleContainer>
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

export default Categories;
