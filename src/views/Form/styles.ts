import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';
import theme from 'theme';
import { EmptySpaceProps, FormInputWrapperProps } from './types';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${converterToRem(10)}rem ${converterToRem(18)}rem;
  @media (min-width: 809px) {
    padding: ${converterToRem(30)}rem ${converterToRem(100)}rem;
  }
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
      ? '1rem'
      : '2rem'};

  @media (min-width: 768px) {
    height: calc(100vh - 700px);
  }
  @media (min-width: 809px) {
    height: calc(100vh - 850px);
  }
`;

export const FormContentWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormInputWrapper = styled.div<FormInputWrapperProps>`
  width: 100%;
  @media (min-width: 768px) {
    width: 30%;
    margin-right: ${props => props.hasMarginRight && '2rem'};
  }
`;
