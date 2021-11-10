import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${converterToRem(10)}rem;

  @media (min-width: 809px) {
    padding: ${converterToRem(30)}rem ${converterToRem(100)}rem;
    align-items: none;
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (min-width: 809px) {
    padding: 0;
  }
`;

export const WrapperImagesAndDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;

  @media (min-width: 809px) {
    padding: 1rem 4rem;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const WrapperImageAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .firstImage,
  .secondImage {
    width: 40%;
    height: 40%;
  }
  .firstImage {
    padding-bottom: 1rem;
  }
  .secondImage {
    padding-top: 1rem;
  }
  @media (min-width: 768px) {
    .firstImage,
    .secondImage {
      width: 20%;
      height: 20%;
    }
  }
  @media (min-width: 809px) {
    .firstImage,
    .secondImage {
      width: 40%;
      height: 40%;
    }
  }
  @media (min-width: 1025px) {
    .firstImage,
    .secondImage {
      width: 60%;
      height: 60%;
    }
  }
`;

export const WrapperTextsAndFooter = styled.div``;
