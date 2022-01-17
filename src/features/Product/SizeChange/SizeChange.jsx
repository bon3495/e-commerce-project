import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductContainer } from '..';

const SizeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const SizeItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e3e4e9;
  width: 40px;
  height: 36px;
  transition: all 0.3s linear;
  color: ${props => (props.isClick ? '#fff' : '#222')};
  background-color: ${props => (props.isClick ? '#222' : '#fff')};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const SizeChange = () => {
  const [sizes, setSize] = useState([
    { name: 'XS', id: 1 },
    { name: 'S', id: 2 },
    { name: 'M', id: 3 },
    { name: 'L', id: 4 },
    { name: 'XL', id: 5 },
  ]);

  const handleChangeSize = id => {
    setSize(prevSizes =>
      prevSizes.map(size => ({
        ...size,
        isClick: size.id === id ? true : false,
      }))
    );
  };
  return (
    <ProductContainer title="Size :">
      <SizeList>
        {sizes.map(size => (
          <SizeItem
            key={size.id}
            onClick={() => handleChangeSize(size.id)}
            isClick={size.isClick}
          >
            {size.name}
          </SizeItem>
        ))}
      </SizeList>
    </ProductContainer>
  );
};

export default SizeChange;
