import { IconButton } from '@material-ui/core';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { ANNOUNCEMENT_HEIGHT, NAV_HEIGHT } from '../../constants';
import { sliderItems } from '../../constants/fake-data';
import Slider from './Slider';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - ${ANNOUNCEMENT_HEIGHT + NAV_HEIGHT}px);
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};
  background-color: #fff7f7;
  border-radius: 50%;
  opacity: 0.5;
  transition: all 0.5s linear;
  z-index: 2;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Sliders = () => {
  const [slidersIndex, setSliders] = useState(1);

  const handlePrevClick = () => {
    if (slidersIndex <= 1) {
      setSliders(sliderItems.length);
    } else {
      setSliders(prevSlider => prevSlider - 1);
    }
  };

  const handleNextClick = () => {
    if (slidersIndex >= sliderItems.length) {
      setSliders(1);
    } else {
      setSliders(prevSlider => prevSlider + 1);
    }
  };

  return (
    <Container sliderHeight={NAV_HEIGHT + ANNOUNCEMENT_HEIGHT}>
      <Arrow direction="left">
        <IconButton onClick={handlePrevClick}>
          <ArrowLeftOutlined />
        </IconButton>
      </Arrow>
      <Wrapper>
        {sliderItems.map(slider => (
          <Slider slider={slider} slidersIndex={slidersIndex} key={slider.id} />
        ))}
      </Wrapper>
      <Arrow direction="right">
        <IconButton onClick={handleNextClick}>
          <ArrowRightOutlined />
        </IconButton>
      </Arrow>
    </Container>
  );
};

export default Sliders;
