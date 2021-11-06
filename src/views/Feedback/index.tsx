import React from 'react';
import successImg from './success.png';
import error from './error.png';

type Props = {
  success: boolean;
};

function Step3({ success }: Props) {
  return <img src={success ? successImg : error} alt="Conditional" />;
}

export default Step3;
