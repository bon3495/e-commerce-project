import React from 'react';
import styled from 'styled-components';
import { categories } from '../../../constants/fake-data';
import Category from './Category';
import TitleContainer from '../../../components/TitleContainer/TitleContainer';

const Container = styled.div`
  /* padding: 30px 15px; */
  padding: 30px 0;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const ListContent = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-left: -30px;
  row-gap: 30px;
`;

const Categories = () => {
  return (
    <>
      <TitleContainer subTitle="All categories">Categories</TitleContainer>
      <Container>
        <ListContent>
          {categories.map(category => (
            <Category key={category.id} category={category} />
          ))}
        </ListContent>
      </Container>
    </>
  );
};

export default Categories;
