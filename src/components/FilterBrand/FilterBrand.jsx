import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import productsApi from '../../api/productsApi';
import useHttp from '../../hook/useHttp';
import { FormControlStyled } from './styles';

const FilterBrand = ({ currentBrand, onChangeBrand }) => {
  const [brands, setBrands] = useState([]);
  const { sendRequest, isLoading } = useHttp();

  useEffect(() => {
    const handleData = dataResult => {
      const data = dataResult;
      const brandsData = new Set(data.map(product => product.brand));
      const newBrands = Array.from(brandsData).map(brand => {
        const quantity = data.filter(product => product.brand === brand);
        return {
          brand,
          quantity: quantity.length,
        };
      });

      setBrands(newBrands);
    };
    sendRequest(productsApi, handleData, {}, 'getAll');
  }, [sendRequest]);

  const handleChangeBrand = e => {
    onChangeBrand(e.target.value);
  };

  return (
    <FormControlStyled variant="outlined">
      <InputLabel id="filter brand" color="primary">
        Filter by Brand
      </InputLabel>
      <Select
        value={currentBrand}
        onChange={handleChangeBrand}
        label="Filter by Brand"
        color="primary"
        labelId="filter brand"
      >
        <MenuItem value="">
          <em>Default</em>
        </MenuItem>
        {isLoading && <MenuItem>Loading...</MenuItem>}
        {brands.map(b => (
          <MenuItem key={b.brand} value={b.brand}>
            {b.brand} ({b.quantity})
          </MenuItem>
        ))}
      </Select>
    </FormControlStyled>
  );
};

export default FilterBrand;
