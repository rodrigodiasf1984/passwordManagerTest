import React from 'react';
import { Header } from 'components';
import successImg from './success.png';
import error from './error.png';

type Props = {
  success: boolean;
};

function Step3({ success }: Props) {
  return <Header currentStep={3} />;
}

export default Step3;
