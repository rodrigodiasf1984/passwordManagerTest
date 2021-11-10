import styled from 'styled-components';
import theme from 'theme';
import { Button as defaultButton } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { converterToRem } from 'utils/converterToRem';

type ButtonProps = {
  success: boolean;
};

type MainProps = {
  success: boolean;
};

export const Container = styled.main<MainProps>`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  border: ${props =>
    !props.success && `8px solid ${theme.palette.secondary.main}`};
`;

export const WrapperIconAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2rem;
`;

export const CustomButton = MuiStyled(defaultButton)<ButtonProps>`
  margin-top: 1rem;
  margin-bottom: ${props => !props.success && '1rem'};
  display: flex;
  align-self: flex-end;
  width: ${props => (!props.success ? '15rem' : '10rem')};
  font-weight: bold;
  height: 3rem;
  text-transform: capitalize;
`;

export const CustomSuccessIcon = MuiStyled(CheckCircleOutlineOutlinedIcon)`
  display: flex;
  margin-top: 1rem;
  margin-left: 1rem;
  height: ${converterToRem(50)}rem;
  width: ${converterToRem(50)}rem;
`;
export const CustomWarningIcon = MuiStyled(WarningAmberOutlinedIcon)`
  display: flex;
  margin-top: 1rem;
  margin-left: 1rem;
  height: ${converterToRem(50)}rem;
  width: ${converterToRem(50)}rem;
`;
