import React from 'react';
import { Breadcrumbs, Typography, Link as LinkMui } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediumTablet, titleConvert } from '../../constants';

const BreadcrumbsWrapper = styled.div`
  /* display: none; */
  padding: 16px 15px;
  /* margin-bottom: 40px; */
  background-color: #f6f6f8;
  font-size: 14px;
  & .link {
    &:hover {
      text-decoration: none;
      color: #4051b6;
    }
    transition: all 0.3s linear;
    color: #222;
  }
  & .text {
    color: #878787;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  /* ${mediumTablet({
    display: 'block',
  })} */
`;

const Breadcumbs = ({ name = '', category }) => {
  return (
    <BreadcrumbsWrapper>
      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        <LinkMui component={Link} to="/" className="link">
          Mens
        </LinkMui>

        {category && (
          <LinkMui component={Link} to={`../${category}`} className="link">
            {titleConvert(category)}
          </LinkMui>
        )}
        <Typography className="text">{name}</Typography>
      </Breadcrumbs>
    </BreadcrumbsWrapper>
  );
};

export default Breadcumbs;
