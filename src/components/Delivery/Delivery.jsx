import {
  HelpOutlineOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
  RotateRightOutlined,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Container, Box, Grid } from '@material-ui/core';
import { TitleContent } from '..';

const DeliveryTitle = styled.h6`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  column-gap: 10px;
  font-size: 14px;
`;

const DeliveryContent = styled.p`
  color: #878787;
  text-align: center;
`;

const deliveries = [
  {
    id: 1,
    icon: <LocalShippingOutlined />,
    title: 'FREE SHIPPING',
    desc: 'Free shipping on all US order or order above $200',
  },
  {
    id: 2,
    icon: <HelpOutlineOutlined />,
    title: 'SUPPORT 24/7',
    desc: 'Contact us 24 hours a day, 7 days a week',
  },
  {
    id: 3,
    icon: <RotateRightOutlined />,
    title: '30 DAYS RETURN',
    desc: 'Simply return it within 30 days for an exchange.',
  },
  {
    id: 4,
    icon: <PaymentOutlined />,
    title: '100% PAYMENT SECURE',
    desc: 'We ensure secure payment with PEV',
  },
];

const Delivery = () => {
  return (
    <>
      <TitleContent subTitle="Custom static block for product detail">
        DELIVERY
      </TitleContent>
      <Box pt={3} pb={10}>
        <Container>
          <Grid container spacing={4}>
            {deliveries.map(delivery => (
              <Grid item xs={12} sm={6} md={3} key={delivery.id}>
                <DeliveryTitle>
                  {delivery.icon}
                  {delivery.title}
                </DeliveryTitle>
                <DeliveryContent>{delivery.desc}</DeliveryContent>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Delivery;
