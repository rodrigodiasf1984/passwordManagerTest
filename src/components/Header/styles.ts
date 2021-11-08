import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${converterToRem(20)}rem;
  height: ${converterToRem(100)}rem;
  background: #ccd5da;
  position: relative;
  z-index: 1;
`;
