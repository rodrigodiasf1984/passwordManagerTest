import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';
import theme from 'theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.palette.common.black};
  min-height: 80vh;
  h2 {
    font-size: ${converterToRem(55)}rem;
  }
  p {
    font-size: ${converterToRem(20)}rem;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
`;
