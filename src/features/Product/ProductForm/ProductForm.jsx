import { Button, IconButton, Typography } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0;
  column-gap: 30px;
`;

const QuantityContainer = styled.div`
  display: flex;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 6px;
  column-gap: 8px;
  align-items: center;
`;

const ButtonChange = styled.div``;

const Quantity = styled(Typography)`
  font-size: 20px;
`;

const ButtonSubmit = styled.div``;

const ProductForm = ({ onChangeNumber }) => {
  const [number, setNumber] = useState(1);

  const handleChangeNumber = newNumber => {
    setNumber(prevNumber => prevNumber + newNumber);
  };

  const handleSubmitNumber = () => {
    onChangeNumber(number);
    setNumber(1);
  };

  return (
    <FormContainer>
      <QuantityContainer>
        <ButtonChange>
          <IconButton
            size="small"
            onClick={() => handleChangeNumber(-1)}
            disabled={number <= 1}
          >
            <Remove />
          </IconButton>
        </ButtonChange>
        <Quantity>{number}</Quantity>
        <ButtonChange>
          <IconButton size="small" onClick={() => handleChangeNumber(1)}>
            <Add />
          </IconButton>
        </ButtonChange>
      </QuantityContainer>
      <ButtonSubmit>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          style={{ borderRadius: 6 }}
          onClick={handleSubmitNumber}
        >
          Add To Cart
        </Button>
      </ButtonSubmit>
    </FormContainer>
  );
};

export default ProductForm;
