import { Box, Button, ClickAwayListener, Typography } from '@material-ui/core';
import { Close, MonetizationOnOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import {
  ButtonStyled,
  CloseButton,
  DividerPriceStyled,
  PriceButtonBox,
  PriceRangeButton,
  PriceRangeContainer,
  PriceRangeContent,
  PriceTextBox,
  TypographyPriceStyled,
} from './styles';

const FilterPrice = ({ onChangePrice }) => {
  const value = useFetch();
  const [priceValue, setPriceValue] = useState(value);
  const [openPriceRange, setOpenPriceRange] = useState(false);

  const handleChangePrice = (e, newPrice) => {
    setPriceValue(newPrice);
  };

  const handleClearPriceValue = () => {
    setPriceValue(value);
    onChangePrice({
      newPrice_gte: value[0],
      newPrice_lte: value[1],
    });
    setOpenPriceRange(false);
  };

  const handleOpenPriceRange = () => {
    setOpenPriceRange(prevState => !prevState);
  };

  const handleClosePriceRange = () => {
    setOpenPriceRange(false);
  };

  const handleSubmitPrice = () => {
    onChangePrice({
      newPrice_gte: priceValue[0],
      newPrice_lte: priceValue[1],
    });
    setOpenPriceRange(false);
  };

  useEffect(() => {
    setPriceValue(value);
  }, [value]);

  return (
    <ClickAwayListener onClickAway={handleClosePriceRange}>
      <PriceRangeContainer>
        <ButtonStyled
          onClick={handleOpenPriceRange}
          variant="outlined"
          color="primary"
          fullWidth
          endIcon={<MonetizationOnOutlined />}
        >
          Price Range
        </ButtonStyled>
        <PriceRangeContent open={openPriceRange}>
          <TypographyPriceStyled>Price Range Selected</TypographyPriceStyled>
          <PriceTextBox>
            <Typography>{`$${priceValue[0]}`}</Typography>
            <Typography>{`$${priceValue[1]}`}</Typography>
          </PriceTextBox>

          <Box px={1} my={1}>
            <PriceRangeButton
              valueLabelDisplay="off"
              value={priceValue}
              onChange={handleChangePrice}
              max={300}
            />
          </Box>

          <DividerPriceStyled />
          <PriceButtonBox>
            <Button
              color="secondary"
              variant="outlined"
              onClick={handleClearPriceValue}
            >
              Clear
            </Button>
            <Button
              color="primary"
              variant="outlined"
              onClick={handleSubmitPrice}
            >
              Search
            </Button>
          </PriceButtonBox>

          <CloseButton size="small" onClick={handleClosePriceRange}>
            <Close />
          </CloseButton>
        </PriceRangeContent>
      </PriceRangeContainer>
    </ClickAwayListener>
  );
};

export default FilterPrice;
