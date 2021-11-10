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
  height: 50%;

  @media (min-height: 568px) {
    height: 47%;
  }
  @media (min-height: 640px) {
    height: 40%;
  }
  @media (min-height: 667px) {
    height: 35%;
  }
  @media (min-height: 731px) {
    height: 32%;
  }
  @media (min-height: 812px) {
    height: 29%;
  }
  @media (min-height: 1024px) {
    width: 95%;
    height: 22%;
  }
  @media (min-height: 1366px) {
    height: 16%;
  }
  @media (min-width: 1367px) {
    width: 98%;
    height: ${props => (props.height !== 0 ? props.height : 98)}%;
  }
`;
