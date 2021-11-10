/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import theme from 'theme';
import { converterToRem } from 'utils/converterToRem';

interface CircleProps {
  active: boolean;
  completed: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div<CircleProps>`
  border-radius: 50%;
  background-color: ${props =>
    props.active
      ? theme.palette.secondary.main
      : props.completed
      ? theme.palette.primary.main
      : theme.palette.secondary.light};
  width: ${props =>
    props.active ? `${converterToRem(50)}rem` : `${converterToRem(40)}rem`};
  height: ${props =>
    props.active ? `${converterToRem(50)}rem` : `${converterToRem(40)}rem`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.palette.common.white};
  position: relative;

  &:before {
    ${props =>
      props.active &&
      css`
        position: absolute;
        content: '';
        border-right: ${converterToRem(50)}rem solid transparent;
        border-left: ${converterToRem(50)}rem solid transparent;
        border-bottom: ${converterToRem(50)}rem solid
          ${theme.palette.common.white};
        top: ${converterToRem(60)}rem;
      `}
  }
`;
