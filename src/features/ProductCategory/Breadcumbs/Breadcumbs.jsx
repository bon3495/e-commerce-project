import React from 'react';
import { Breadcrumbs, Typography, Link as LinkMui } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbsWrapper = styled.div`
  padding: 16px 15px;
  margin-bottom: 40px;
  background-color: #f6f6f8;
  font-size: 14px;
  & .home {
    &:hover {
      text-decoration: none;
      color: #4051b6;
    }
    transition: all 0.3s linear;
    color: #222;
  }
  & .category {
    color: #878787;
    font-size: 14px;
  }
`;

const Breadcumbs = () => {
  return (
    <BreadcrumbsWrapper>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        <LinkMui component={Link} to="/home" className="home">
          Home
        </LinkMui>
        <Typography className="category">Blazer</Typography>
      </Breadcrumbs>
    </BreadcrumbsWrapper>
  );
};

export default Breadcumbs;
