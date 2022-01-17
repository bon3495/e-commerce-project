import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Slider,
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

function valuetext(value) {
  return `$${value}`;
}

const FiltersItem = styled.li`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  line-height: 32px;
  position: relative;
  margin-bottom: 20px;
  &:after {
    height: 2px;
    width: 60px;
    content: '';
    position: absolute;
    bottom: 0;
    background-color: #222;
    left: 0;
  }
`;

const PriceTop = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 40px;
  margin: 0 auto;
`;

const PriceRange = styled.div`
  flex: 1;
  padding: 0 16px;
  margin: 0 16px;
`;

const PriceButton = styled.div`
  background-color: #f6f6f8;
  border-radius: 50%;
`;

const FiltersSelect = styled.div`
  display: flex;
  width: 80%;
  margin: 4px 0;
`;

const Seclect = styled.select`
  /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  border-radius: 40px;
  flex: 1;
  color: black;
  background-color: transparent;
  cursor: pointer;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  margin: 0 10px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Option = styled.option``;

const DividerFilter = styled(Divider)`
  margin: 50px 0;
`;

const Filters = () => {
  const [value, setValue] = useState([1, 300]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <FiltersItem>
              <PriceTitle>Filter by Price</PriceTitle>
              <PriceTop>
                <PriceRange>
                  <Slider
                    value={value}
                    max={300}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    valueLabelFormat={valuetext}
                  />
                </PriceRange>
                <PriceButton>
                  <IconButton color="primary" size="small">
                    <SearchOutlined />
                  </IconButton>
                </PriceButton>
              </PriceTop>
            </FiltersItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FiltersItem>
              <PriceTitle>Filter by Brand</PriceTitle>
              <FiltersSelect>
                <Seclect>
                  <Option defaultValue disabled>
                    Brand...
                  </Option>
                  <Option>Escada</Option>
                  <Option>Fendi</Option>
                  <Option>Bouclair</Option>
                  <Option>Prada</Option>
                  <Option>Luxottica</Option>
                </Seclect>
              </FiltersSelect>
            </FiltersItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FiltersItem>
              <PriceTitle>Filter Sort by</PriceTitle>
              <FiltersSelect>
                <Seclect>
                  <Option defaultValue>Name</Option>
                  <Option>Price</Option>
                  <Option>Latest</Option>
                </Seclect>
              </FiltersSelect>
            </FiltersItem>
          </Grid>
        </Grid>
        <DividerFilter variant="middle" />
      </Container>
    </Box>
  );
};

export default Filters;
