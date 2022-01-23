import React from 'react';
import styled from 'styled-components';
import { NAV_HEIGHT } from '../../constants';

const ToolbarContainer = styled.div`
  margin-top: ${NAV_HEIGHT}px;
`;

const Toolbar = ({ children }) => {
  return <ToolbarContainer>{children}</ToolbarContainer>;
};

export default Toolbar;
