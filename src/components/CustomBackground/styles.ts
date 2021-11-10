import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';

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
  width: 100%;
  background: #f5f5f5;
`;

export const ContainerStep = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: #fff;
  margin: ${converterToRem(20)}rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 99;

  @media (min-width: 411px) {
    width: 91%;
  }
  @media (min-width: 768px) {
    width: 95%;
  }
  @media (min-width: 1024px) {
    width: 96%;
  }
  @media (min-width: 1280px) {
    width: 98%;
  }
`;
