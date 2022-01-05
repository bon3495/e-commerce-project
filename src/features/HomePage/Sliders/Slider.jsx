import { Button } from '@material-ui/core';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
 0% {
    transform: translate(100%,-50%);
    opacity: 0;
  }
  80% {
    transform: translate(-1rem,-50%);
  }
  100% {
    transform: translate(0,-50%);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
 0% {
    transform: translate(-100%,-50%);
    opacity: 0;
  }
  80% {
    transform: translate(1rem,-50%);
  }
  100% {
    transform: translate(0,-50%);
    opacity: 1;
  }
`;

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
  left: ${props => props.position === 'right' && '6%'};
  right: ${props => props.position === 'left' && '10%'};
  transform: translateY(-50%);
  /* animation: ${props =>
    props.position === 'right' ? slideInLeft : slideInRight}
    1s linear 0.75s backwards; */
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 8px 0;
`;

const Desc = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 24.5px;
  color: #878787;
`;

const Slider = ({ slider, slidersIndex }) => {
  return (
    <Slide className={slider.id === slidersIndex ? 'active' : ''}>
      <ImageContainer img={slider.img} />
      <InfoContainer position={slider.position}>
        <SubTitle>{slider.sub}</SubTitle>
        <Title>{slider.title}</Title>
        <Desc>{slider.desc}</Desc>
        <Button
          size="large"
          variant="outlined"
          style={{ borderRadius: 20, fontSize: 14 }}
        >
          Shop now
        </Button>
      </InfoContainer>
    </Slide>
  );
};

export default Slider;
