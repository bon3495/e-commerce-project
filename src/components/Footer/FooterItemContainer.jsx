import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 0 15px;
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h6`
  font-size: 18px;
  margin: 10px 0 16px;
  font-weight: 400;
`;

const FooterLink = styled.li`
  line-height: 30px;
  margin-bottom: 5px;
  text-decoration: none;
  color: #8e8e8e;
  font-weight: 300;
`;

const FooterItemContainer = ({ title, list }) => {
  return (
    <Container>
      <FooterTitle>{title}</FooterTitle>
      <FooterList>
        {list.map((item, index) => (
          <FooterLink key={item.id || index}>{item.title || item}</FooterLink>
        ))}
      </FooterList>
    </Container>
  );
};

export default FooterItemContainer;
