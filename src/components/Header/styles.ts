import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';
import theme from 'theme';
import { Divider } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';

type DividerProps = {
  currentStep: number;
};

export const CustomDivider = MuiStyled(Divider)<DividerProps>`
width: 50px,
border-bottom: 5px solid,
color: ${props =>
  props.currentStep > 1
    ? theme.palette.primary.main
    : theme.palette.secondary.light}
`;

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${converterToRem(20)}rem;
  height: ${converterToRem(100)}rem;
  background: ${theme.palette.background.default};
  position: relative;
  z-index: 1;
`;

export const WrapperSteps = styled.section`
  display: flex;
  align-items: center;
  align-self: center;
  margin: 0 auto;
`;
