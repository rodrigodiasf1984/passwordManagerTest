import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';
import theme from 'theme';

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
