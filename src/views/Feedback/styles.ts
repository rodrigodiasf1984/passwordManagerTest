import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${converterToRem(10)}rem ${converterToRem(18)}rem;

  @media (min-width: 809px) {
    padding: ${converterToRem(30)}rem ${converterToRem(100)}rem;
  }
`;
