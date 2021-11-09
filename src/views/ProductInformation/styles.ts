import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';
import { Divider } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${converterToRem(30)}rem ${converterToRem(100)}rem;
`;

export const CustomDivider = MuiStyled(Divider)`
  border-bottom-width: ${converterToRem(5)}rem;
  width:${converterToRem(40)}rem;
  margin-top: ${converterToRem(10)}rem;
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const WrapperImagesAndDescription = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 2rem 5rem;
`;

export const WrapperImageAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
