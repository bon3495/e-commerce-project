import React from 'react';
import styled from 'styled-components';
import { mediumTablet, NAV_HEIGHT } from '../../constants';

const TitleWrapper = styled.div`
  /* display: none; */
  background-color: #f7f7f7;
  padding: 55px 0;
  text-align: center;
  background-image: url('https://claue.arrowtheme.com/static/frontend/Mgs/claue/en_US/images/shop-category.jpg');
  background-size: cover;
  background-repeat: repeat-y;
  position: relative;
  background-position: center center;
  background-attachment: scroll;
  &:before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  /* ${mediumTablet({
    display: 'block',
  })} */
`;

const TitleContent = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  position: relative;
  z-index: 2;
  letter-spacing: 1px;
  font-family: 'Libre Baskerville', serif;
`;

const ImageTitle = ({ children }) => {
  return (
    <TitleWrapper>
      <TitleContent>{children}</TitleContent>
    </TitleWrapper>
  );
};

export default ImageTitle;
