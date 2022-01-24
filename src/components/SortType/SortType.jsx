import { InputLabel, MenuItem, Select } from '@material-ui/core';
import queryString from 'query-string';
import React from 'react';
import { FormControlStyled } from './styles';

const SortType = ({ onChangeSort, currentSort }) => {
  const handleChangeSortType = event => {
    const { value } = event.target;
    const queryPrams = queryString.parse(value);
    if (onChangeSort) onChangeSort(queryPrams);
  };

  return (
    <FormControlStyled variant="outlined">
      <InputLabel color="primary">Sort</InputLabel>
      <Select
        value={currentSort}
        onChange={handleChangeSortType}
        label="Sort by"
        color="primary"
      >
        <MenuItem value="_order=&_sort=">
          <em>Default</em>
        </MenuItem>
        <MenuItem value="_order=desc&_sort=orders" name="Best Seller">
          Best Seller
        </MenuItem>
        <MenuItem value="_order=desc&_sort=reviews" name="The Most Reviews">
          The Most Reviews
        </MenuItem>
        <MenuItem value="_order=desc&_sort=ratingValue" name="Highest Rating">
          Highest Rating
        </MenuItem>
        <MenuItem value="_order=desc&_sort=discount" name="Highest Discount">
          Highest Discount
        </MenuItem>
        <MenuItem value="_order=desc&_sort=newPrice" name="Price High To Low">
          Price High To Low
        </MenuItem>
        <MenuItem value="_order=asc&_sort=newPrice" name="Price Low To High">
          Price Low To High
        </MenuItem>
      </Select>
    </FormControlStyled>
  );
};

export default React.memo(SortType);
