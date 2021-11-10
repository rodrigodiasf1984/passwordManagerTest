import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';
import { Divider as defaultDivider } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';
import theme from 'theme';

type DividerProps = {
  currentStep: number;
  biggerThan: number;
};

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

export const WrapperLang = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 5%;
`;

export const CustomDivider = MuiStyled(defaultDivider)<DividerProps>`
  width: 50px;
  border-bottom: 5px solid;
  color:
    ${props =>
      props.currentStep > props.biggerThan
        ? theme.palette.primary.main
        : theme.palette.secondary.light};
`;
