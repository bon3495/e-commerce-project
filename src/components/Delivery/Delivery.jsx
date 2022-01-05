import {
  HelpOutlineOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
  RotateRightOutlined,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import TitleContainer from '../TitleContainer/TitleContainer';

const Container = styled.div`
  padding: 30px 15px 45px;
  /* padding: 30px 0; */
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const DeliveryWrapper = styled.div`
  display: flex;
  margin-left: -30px;
`;

const DeliveryItem = styled.div`
  width: calc(25% - 30px);
  margin-left: 30px;
  text-align: center;
  padding: 0 8px;
`;
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
      <TitleContainer subTitle="Custom static block for product detail">
        DELIVERY & RETURNS
      </TitleContainer>
      <Container>
        <DeliveryWrapper>
          {deliveries.map(delivery => (
            <DeliveryItem key={delivery.id}>
              <DeliveryTitle>
                {delivery.icon}
                {delivery.title}
              </DeliveryTitle>
              <DeliveryContent>{delivery.desc}</DeliveryContent>
            </DeliveryItem>
          ))}
        </DeliveryWrapper>
      </Container>
    </>
  );
};

export default Delivery;
