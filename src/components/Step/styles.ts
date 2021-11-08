/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';
import theme from 'theme';

interface CircleProps {
  active: boolean;
  completed: boolean;
}

export const Circle = styled.div<CircleProps>`
  border-radius: 50%;
  background-color: ${props =>
    props.active
      ? theme.palette.secondary.main
      : props.completed
      ? theme.palette.primary.main
      : '#e0e0e0'};
  width: ${props => (props.active ? '50px' : '30px')};
  height: ${props => (props.active ? '50px' : '30px')};
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
        border-right: 50px solid transparent;
        border-left: 50px solid transparent;
        border-bottom: 50px solid ${theme.palette.common.white};
        top: 60px;
      `}
  }
`;
