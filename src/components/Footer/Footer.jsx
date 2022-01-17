import { Box, Container, Grid, IconButton } from '@material-ui/core';
import {
  Facebook,
  Instagram,
  MailOutline,
  PhoneOutlined,
  Pinterest,
  RoomOutlined,
  Twitter,
  YouTube,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {
  largeHandset,
  largeScreen,
  mediumTablet,
  smallTablet,
} from '../../constants';
import FooterItemContainer from './FooterItemContainer';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { selectCategoriesSection } from '../../store/selectors';

const socialsIcon = [
  <Facebook />,
  <Instagram />,
  <Twitter />,
  <YouTube />,
  <Pinterest />,
];

const infomations = [
  'About Us',
  'Contact Us',
  'Terms & Conditions',
  'Returns & Exchanges',
  'Shipping & Delivery',
  'Privacy Policy',
];

const quickLinks = [
  'Store Location',
  'My Account',
  'Accessories',
  'Orders Tracking',
  'Size Guide',
  'FAQs',
];

const FooterLogo = styled.h3`
  font-size: 30px;
  font-family: 'Libre Baskerville', serif;
  margin-bottom: 20px;
  margin-left: 30px;
  color: #4051b6;
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const MainItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: #8e8e8e;
  font-weight: 300;
  & .item-icon {
    margin-right: 12px;
  }
`;

const SocialsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

const SocialsLink = styled.li`
  margin-right: 12px;
`;

const FooterSubcribe = styled.div`
  padding: 0 15px;
  ${mediumTablet({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '30px',
    flexDdirection: 'row',
  })}
  ${largeScreen({
    flexDirection: 'column',
  })};
`;

const FooterText = styled.p`
  color: #8e8e8e;
  font-weight: 300;
  font-size: 14px;
  margin: 10px 0 16px;
  line-height: 24px;
`;

const FooterFormContainer = styled.div`
  max-width: 100%;
  height: 100%;
  border-radius: 50px;
  border: 1px solid #878787;
  padding: 2px;
  margin: 0;

  ${largeHandset({
    maxWidth: '70%',
  })}

  ${smallTablet({
    maxWidth: '50%',
  })}

  ${mediumTablet({
    maxWidth: '100%',
  })}
`;

const FooterForm = styled.form`
  display: flex;
  align-items: center;
`;

const FooterControl = styled.div`
  width: 60%;
`;

const FooterInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 50px;
  border: none;
  padding: 0 10px;
  background-color: transparent;
  margin: 0;
  color: #878787;
  outline: none;
  &::placeholder {
    color: #c3c3c3;
  }
`;

const FooterActions = styled.div`
  flex: 1;
`;

const FooterSubmit = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 10px 15px;
  border-radius: 40px;
  color: white;
  background-color: #222;
  border: 2px solid #222;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;

  &:hover {
    background-color: #4051b6;
    border-color: #4051b6;
  }
  transition: all 0.3s linear;
`;

const CoppyRight = styled.p`
  text-align: center;
  font-size: 14px;
  color: #878787;
  padding: 16px 0;
  font-weight: 300;
`;

const Footer = () => {
  const classes = useStyles();
  const handleSubmit = e => {
    e.preventDefault();
  };

  const categories = useSelector(selectCategoriesSection);

  return (
    <>
      <Box className={classes.wrapper}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3}>
              <Box mb={4}>
                <FooterLogo>Ecommerce</FooterLogo>

                <FooterList>
                  <MainItem>
                    <RoomOutlined className="item-icon" />
                    184 Main Rd E, St Albans
                    <br />
                    VIC 3021, Australia
                  </MainItem>
                  <MainItem>
                    <MailOutline className="item-icon" />
                    bon3495@gmail.com
                  </MainItem>
                  <MainItem>
                    <PhoneOutlined className="item-icon" />
                    +84 796 849
                  </MainItem>
                </FooterList>

                <SocialsList>
                  {socialsIcon.map((item, index) => (
                    <SocialsLink key={index}>
                      <IconButton size="small">{item}</IconButton>
                    </SocialsLink>
                  ))}
                </SocialsList>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={2}>
              <Box mb={4}>
                <FooterItemContainer title="Categories" list={categories} />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={2}>
              <Box mb={4}>
                <FooterItemContainer title="Information" list={infomations} />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} lg={2}>
              <Box mb={4}>
                <FooterItemContainer title="Quick Links" list={quickLinks} />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} lg={3}>
              <Box>
                <FooterSubcribe>
                  <FooterText>
                    Subscribe to our newsletter and get 10% off your first
                    purchase
                  </FooterText>
                  <FooterFormContainer>
                    <FooterForm onSubmit={handleSubmit}>
                      <FooterControl>
                        <FooterInput placeholder="Your email address" />
                      </FooterControl>
                      <FooterActions>
                        <FooterSubmit>Subscribe</FooterSubmit>
                      </FooterActions>
                    </FooterForm>
                  </FooterFormContainer>
                </FooterSubcribe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CoppyRight>
        Copyright © 2021 E-Commerce. All rights reserved. Powered by BonTran
      </CoppyRight>
    </>
  );
};

export default Footer;
