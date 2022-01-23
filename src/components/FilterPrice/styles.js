import {
  Box,
  Divider,
  Slider,
  Typography,
  withStyles,
  Button,
  IconButton,
} from '@material-ui/core';
import styled from 'styled-components';

export const PriceTextBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const PriceButtonBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  height: 56px;
  text-transform: capitalize;
  font-size: 16px;
  & > span {
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceRangeButton = withStyles({
  root: {
    color: '#4051b6',
    height: 8,
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: '#f6f6f7',
    border: '2px solid currentColor',
    marginTop: -5,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export const PriceRangeContainer = styled(Box)`
  position: relative;
`;

export const PriceRangeContent = styled(Box)`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 1000;
  background-color: #f6f6f7;
  width: 350px;
  border-radius: 4px;
  box-shadow: 0 5px 13px -2px rgb(0 0 0 / 80%);
  transition: all 0.3s linear;
  padding: 10px;
  margin-top: 12px;
  opacity: ${props => (props.open ? '1' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
`;

export const DividerPriceStyled = styled(Divider)`
  margin: 12px auto 20px;
`;

export const TypographyPriceStyled = styled(Typography)`
  color: #777;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: 10px;
  top: 10px;
`;
