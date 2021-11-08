import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Top = styled.div`
  display: flex;
  height: ${converterToRem(100)}rem;
  width: 100%;
  background: #e3e9e9;
`;

export const Content = styled.div`
  display: flex;
  min-height: calc(100vh - 200rem);
  width: 100%;
  background: #f5f5f5;
`;

export const ContainerStep = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 92%;
  background-color: #fff;
  margin: ${converterToRem(20)}rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 99;
`;
