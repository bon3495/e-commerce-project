import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { A11y, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoriesSkeleton } from '..';
import categoriesApi from '../../../api/categoriesApi';
import { TitleContent } from '../../../components';
import useHttp from '../../../hook/useHttp';
import Category from './HomeCategory';

const HomeCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const { sendRequest, isLoading } = useHttp();

  useEffect(() => {
    const handleCategoriesData = data => {
      setCategoriesData(data);
    };
    sendRequest(categoriesApi, handleCategoriesData, {}, 'getAll');
  }, [sendRequest]);

  return (
    <Box pt={3} pb={4}>
      <TitleContent subTitle="All categories">Categories</TitleContent>
      <Box>
        <Container>
          {isLoading && <CategoriesSkeleton />}
          {!isLoading && (
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                400: {
                  slidesPerView: 2,
                },
                // when window width is >= 640px
                740: {
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                960: {
                  slidesPerView: 4,
                },
              }}
            >
              {categoriesData.map(category => (
                <SwiperSlide key={category.id}>
                  <Category category={category} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default HomeCategories;
