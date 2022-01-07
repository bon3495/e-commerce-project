import { Box, IconButton } from '@material-ui/core';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { NAV_HEIGHT } from '../../../constants';
import { sliderItems } from '../../../constants/fake-data';
import Slider from './Slider/Slider';
import useStyles from './styles.js';

const Sliders = () => {
  const classes = useStyles({ NAV_HEIGHT });
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
    <Box className={classes.root}>
      <Box className={`${classes.arrow} left`}>
        <IconButton onClick={handlePrevClick}>
          <ArrowLeftOutlined />
        </IconButton>
      </Box>
      <Box className={classes.imageContainer}>
        {sliderItems.map(slider => (
          <Slider slider={slider} slidersIndex={slidersIndex} key={slider.id} />
        ))}
      </Box>
      <Box className={`${classes.arrow} right`}>
        <IconButton onClick={handleNextClick}>
          <ArrowRightOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sliders;
