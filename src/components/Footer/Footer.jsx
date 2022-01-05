import React from 'react';
import styled from 'styled-components';
import {
  RoomOutlined,
  MailOutline,
  PhoneOutlined,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Pinterest,
} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { categories } from '../../constants/fake-data';

const Container = styled.div`
  padding: 30px 15px;
  background-color: #f6f6f8;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const FooterMainContainer = styled.div`
  flex: 2;
  padding: 0 15px;
`;

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
  color: #878787;
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

const FooterItemContainer = styled.div`
  flex: 1;
  padding: 0 15px;
`;

const FooterTitle = styled.h6`
  font-size: 20px;
  margin: 10px 0 16px;
`;

const FooterLink = styled.a`
  line-height: 30px;
  margin-bottom: 5px;
  text-decoration: none;
  color: #878787;
`;

const FooterSubcribe = styled.div`
  flex: 2;
  padding: 0 15px;
`;

const FooterText = styled.p`
  color: #878787;
  font-size: 14px;
  margin: 10px 0 16px;
  line-height: 24px;
`;

const FooterFormContainer = styled.div`
  max-width: 100%;
  border-radius: 50px;
  border: 1px solid #878787;
  padding: 2px;
  margin: 0;
`;

const FooterForm = styled.form`
  display: flex;
  align-items: center;
`;

const FooterControl = styled.div``;

const FooterInput = styled.input`
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
`;

const Footer = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Wrapper>
          <FooterTop>
            <FooterMainContainer>
              <FooterLogo>Commerce</FooterLogo>

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
                <SocialsLink>
                  <IconButton size="small">
                    <Facebook />
                  </IconButton>
                </SocialsLink>
                <SocialsLink>
                  <IconButton size="small">
                    <Instagram />
                  </IconButton>
                </SocialsLink>
                <SocialsLink>
                  <IconButton size="small">
                    <Twitter />
                  </IconButton>
                </SocialsLink>
                <SocialsLink>
                  <IconButton size="small">
                    <YouTube />
                  </IconButton>
                </SocialsLink>
                <SocialsLink>
                  <IconButton size="small">
                    <Pinterest />
                  </IconButton>
                </SocialsLink>
              </SocialsList>
            </FooterMainContainer>
            <FooterItemContainer>
              <FooterTitle>Categories</FooterTitle>
              <FooterList>
                {categories.map(category => (
                  <FooterLink key={category.id}>{category.type}</FooterLink>
                ))}
              </FooterList>
            </FooterItemContainer>
            <FooterItemContainer>
              <FooterTitle>Categories</FooterTitle>
              <FooterList>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Contact Us</FooterLink>
                <FooterLink>Terms & Conditions</FooterLink>
                <FooterLink>Returns & Exchanges</FooterLink>
                <FooterLink>Shipping & Delivery</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
              </FooterList>
            </FooterItemContainer>
            <FooterItemContainer>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterList>
                <FooterLink>Store Location</FooterLink>
                <FooterLink>My Account</FooterLink>
                <FooterLink>Accessories</FooterLink>
                <FooterLink>Orders Tracking</FooterLink>
                <FooterLink>Size Guide</FooterLink>
                <FooterLink>FAQs</FooterLink>
              </FooterList>
            </FooterItemContainer>
            <FooterSubcribe>
              <FooterText>
                Subscribe to our newsletter and get 10% off your first purchase
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
          </FooterTop>
        </Wrapper>
      </Container>
      <CoppyRight>
        Copyright © 2021 E-Commerce. All rights reserved. Powered by BonTran
      </CoppyRight>
    </>
  );
};

export default Footer;
