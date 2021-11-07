import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';

export const ContainerStep1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 92%;
  background-color: #fff;
  margin: ${converterToRem(20)}rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 99;

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${converterToRem(30)}rem ${converterToRem(100)}rem;

    /* .divider {
      margin-top: '1rem';
      width: '2%';
      border-bottom-width: 3;
    } */
  }
`;
