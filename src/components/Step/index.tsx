/* eslint-disable no-nested-ternary */
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Circle } from './styles';

type StepProps = {
  name: number;
  active: boolean;
  completed?: boolean;
};

const Step = ({ name, active, completed = false }: StepProps) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Circle active={active} completed={completed}>
      <span>{completed ? <DoneIcon /> : name}</span>
    </Circle>
  </div>
);

export default Step;
