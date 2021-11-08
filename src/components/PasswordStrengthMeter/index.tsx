import React from 'react';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import zxcvbn from 'zxcvbn';

type PasswordStrengthMeterProps = {
  password: string;
};

const PasswordStrengthMeter = ({ password }: PasswordStrengthMeterProps) => {
  const testResult = zxcvbn(password);
  const finalScore = (testResult.score * 100) / 4;

  const changeColors = (): string => {
    switch (testResult.score) {
      case 0:
        return '#ff0000';
      case 1:
        return '#ffa500';
      case 2:
        return '#ffff00';
      case 3:
        return '#008000';
      case 4:
        return '#00ff00';
      default:
        return '#ff0000';
    }
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[300],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: changeColors(),
    },
  }));

  return (
    <section>
      <BorderLinearProgress variant="determinate" value={finalScore} />
    </section>
  );
};

export default PasswordStrengthMeter;
