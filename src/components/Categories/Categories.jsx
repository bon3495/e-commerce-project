import React from 'react';
import styled from 'styled-components';
import { categories } from '../../constants/fake-data';
import Category from './Category';

const Container = styled.div`
  /* padding: 30px 15px; */
  padding: 30px 0;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  &:after,
  &:before {
    position: absolute;
    content: '';
    width: 60px;
    height: 2px;
    background-color: #000;
  }
  &:before {
    top: 48%;
    left: -75px;
  }
  &:after {
    top: 48%;
    right: -75px;
  }
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
    <Container>
      <TitleContainer>
        <Title>Categories</Title>
      </TitleContainer>

      <ListContent>
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </ListContent>
    </Container>
  );
};

export default Categories;
