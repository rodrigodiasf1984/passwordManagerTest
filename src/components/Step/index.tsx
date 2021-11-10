/* eslint-disable no-nested-ternary */
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Circle, Container } from './styles';
import { StepProps } from './types';

const Step = ({ name, active, completed = false }: StepProps) => (
  <Container>
    <Circle active={active} completed={completed}>
      <span>
        {completed ? <DoneIcon style={{ fontWeight: 'bold' }} /> : name}
      </span>
    </Circle>
  </Container>
);

export default Step;
