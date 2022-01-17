import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {
  largeHandset,
  largeTablet,
  mediumTablet,
  smallTablet,
} from '../../../constants';

const Slide = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s linear;
  position: absolute;
  top: 0;
  left: 0;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.img});
`;

const InfoContainer = styled.div`
  max-width: 550px;
  position: absolute;
  color: #222;
  top: 50%;
  left: ${props => props.position === 'right' && '10%'};
  right: ${props => props.position === 'left' && '10%'};
  transform: translateY(-50%);
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;

  ${largeHandset({
    fontSize: '16px',
  })}

  ${smallTablet({
    fontSize: '18px',
  })}
`;

const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 16px 0;

  ${largeHandset({
    fontSize: '24px',
  })}

  ${smallTablet({
    fontSize: '32px',
  })}

  ${mediumTablet({
    fontSize: '42px',
  })}
  ${largeTablet({
    fontSize: '50px',
  })}
`;

const Desc = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 24.5px;
  color: #878787;
  display: none;
  ${largeTablet({
    display: 'block',
  })}
`;

const Slider = ({ slider, slidersIndex }) => {
  return (
    <Slide className={slider.id === slidersIndex ? 'active' : ''}>
      <ImageContainer img={slider.img} />
      <InfoContainer position={slider.position}>
        <SubTitle>{slider.sub}</SubTitle>
        <Title>{slider.title}</Title>
        <Desc>{slider.desc}</Desc>
        <Button size="large" variant="outlined">
          Shop now
        </Button>
      </InfoContainer>
    </Slide>
  );
};

export default Slider;
