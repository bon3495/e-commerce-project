import { Box, IconButton } from '@material-ui/core';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useRef } from 'react';
import { A11y, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slider } from '..';
import { NAV_HEIGHT, sliderItems } from '../../../constants';
import useStyles from './styles.js';

const Sliders = () => {
  const classes = useStyles({ NAV_HEIGHT });
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Box className={classes.root}>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        loop={true}
        effect="fade"
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
        }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        <Box className={`${classes.arrow} left`} ref={navigationPrevRef}>
          <IconButton>
            <ArrowLeftOutlined />
          </IconButton>
        </Box>
        {sliderItems.map(slider => (
          <SwiperSlide key={slider.id}>
            <Slider slider={slider} />
          </SwiperSlide>
        ))}

        <Box className={`${classes.arrow} right`} ref={navigationNextRef}>
          <IconButton>
            <ArrowRightOutlined />
          </IconButton>
        </Box>
      </Swiper>
    </Box>
  );
};

export default Sliders;
