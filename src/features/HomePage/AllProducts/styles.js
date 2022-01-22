import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  InputBase,
  Paper,
  Slider,
  Typography,
  withStyles,
} from '@material-ui/core';
import styled from 'styled-components';

export const ContainerStyled = styled(Container)`
  /* background-color: #ccc; */
`;

export const FormControlStyled = styled(FormControl)`
  /* margin-left: auto; */
  width: 100%;
`;

export const GridMarginLeft = styled(Grid)`
  margin-left: auto;
`;

export const DividerStyled = styled(Divider)`
  margin: 20px auto;
`;

export const PriceTextBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceButtonBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  left: 0;
  top: 100%;
  z-index: 1000;
  background-color: #f6f6f7;
  width: 340px;
  border-radius: 4px;
  box-shadow: 0 5px 13px -2px rgb(0 0 0 / 80%);
  transition: all 0.3s linear;
  padding: 10px;
`;

export const DividerPriceStyled = styled(Divider)`
  margin: 12px auto 20px;
`;

export const TypographyPriceStyled = styled(Typography)`
  color: #777;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 12px;
`;

export const PaperFormStyled = styled(Paper)`
  height: 56px;
  margin-left: auto;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const InputBaseStyled = styled(InputBase)`
  width: 100%;
  & input {
    flex: 1;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
