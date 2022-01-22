import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import queryString from 'query-string';
import { FormControlStyled } from './styles';

const SortType = ({ onChangeSort }) => {
  const [sortType, setSortType] = useState('');
  const handleChangeSortType = event => {
    setSortType(event.target.value);
    const queryPrams = queryString.parse(event.target.value);
    if (onChangeSort) onChangeSort(queryPrams);
  };

  return (
    <FormControlStyled variant="outlined">
      <InputLabel color="primary">Sort</InputLabel>
      <Select
        value={sortType}
        onChange={handleChangeSortType}
        label="Sort by"
        color="primary"
      >
        <MenuItem value="">
          <em>Default</em>
        </MenuItem>
        <MenuItem value="_sort=orders&_order=desc">Best Seller</MenuItem>
        <MenuItem value="_sort=reviews&_order=desc">The Most Reviews</MenuItem>
        <MenuItem value="_sort=ratingValue&_order=desc">
          Highest Rating
        </MenuItem>
        <MenuItem value="_sort=discount&_order=desc">Highest Discount</MenuItem>
        <MenuItem value="_sort=newPrice&_order=desc">
          Price High To Low
        </MenuItem>
        <MenuItem value="_sort=newPrice&_order=asc">Price Low To High</MenuItem>
      </Select>
    </FormControlStyled>
  );
};

export default SortType;
