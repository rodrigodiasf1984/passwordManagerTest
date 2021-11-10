import React from 'react';
import { Container, Content, Top, ContainerStep } from './styles';
import { CustomBackgroundProps } from './types';

function CustomBackground({ children }: CustomBackgroundProps) {
  return (
    <Container>
      <Top />
      <Content />
      <ContainerStep>{children}</ContainerStep>
    </Container>
  );
}

export default CustomBackground;
