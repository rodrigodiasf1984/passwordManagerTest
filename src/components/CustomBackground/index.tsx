import React from 'react';
import { Container, Content, Top } from './styles';

type CustomBackgroundProps = {
  children: React.ReactNode;
};

function CustomBackground({ children }: CustomBackgroundProps) {
  return (
    <Container>
      <Top />
      <Content />
      {children}
    </Container>
  );
}

export default CustomBackground;
