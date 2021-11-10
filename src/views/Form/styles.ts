import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';
import theme from 'theme';

type EmptySpaceProps = {
  errorConfirmPassword: boolean;
  errorPassword: boolean;
  errorPasswordHint: boolean;
};

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${converterToRem(30)}rem ${converterToRem(100)}rem;
`;

export const LoadingWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const WrapperLabelAndToolTip = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const EmptySpace = styled.div<EmptySpaceProps>`
  color: ${theme.palette.primary.main};
  padding-top: ${props =>
    props.errorConfirmPassword || props.errorPassword || props.errorPasswordHint
      ? '7rem'
      : '9rem'};
`;
