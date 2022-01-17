import { Button, IconButton } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
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
`;

const ButtonChange = styled.div``;

const QuantityInput = styled.input`
  width: 44px;
  border: none;
  outline: none;
  font-size: 20px;
  text-align: center;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const ButtonSubmit = styled.div``;

const ProductForm = () => {
  return (
    <FormContainer>
      <QuantityContainer>
        <ButtonChange>
          <IconButton size="small">
            <Remove />
          </IconButton>
        </ButtonChange>
        <QuantityInput defaultValue="1" />
        <ButtonChange>
          <IconButton size="small">
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
        >
          Add To Cart
        </Button>
      </ButtonSubmit>
    </FormContainer>
  );
};

export default ProductForm;
