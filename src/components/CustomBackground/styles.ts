import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';
import { ContainerStepProps } from './types';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Top = styled.div`
  display: flex;
  height: ${converterToRem(100)}rem;
  width: 100%;
  background: #e3e9e9;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  @media (min-width: 809px) {
    min-height: calc(100vh - 200rem);
  }
`;

export const ContainerStep = styled.div<ContainerStepProps>`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #fff;
  margin: ${converterToRem(20)}rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 99;

  @media (min-width: 768px) {
    width: 95%;
  }
  @media (min-width: 809px) {
    width: 95%;
    height: 20%;
  }
  @media (min-width: 1025px) {
    width: 98%;
    height: ${props => (props.height !== 0 ? props.height : 98)}%;
  }
`;
