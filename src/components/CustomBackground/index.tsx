import React from 'react';
import { Container, Content, Top, ContainerStep } from './styles';
import { CustomBackgroundProps } from './types';

function CustomBackground({ children, height }: CustomBackgroundProps) {
  return (
    <Container>
      <Top />
      <Content />
      <ContainerStep height={!height ? 0 : height}>{children}</ContainerStep>
    </Container>
  );
}

export default CustomBackground;
