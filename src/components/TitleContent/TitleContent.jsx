import React from 'react';
import styled from 'styled-components';
import { largeHandset } from '../../constants';

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #f5f7fa; */
`;

const Title = styled.h3`
  font-size: 20px;
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

  ${largeHandset({
    fontSize: '24px',
  })}
`;

const SubTitle = styled.h4`
  font-size: 12px;
  color: #878787;
  font-weight: normal;
  font-family: 'Libre Baskerville', serif;
  margin-top: 5px;
  letter-spacing: 0.5px;
  font-style: italic;
  line-height: 16px;

  ${largeHandset({
    fontSize: '14px',
  })}
`;

const TitleContent = ({ children, subTitle }) => {
  return (
    <Container>
      <Title>{children}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
};

export default TitleContent;
