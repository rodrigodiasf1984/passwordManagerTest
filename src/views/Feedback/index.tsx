import React from 'react';
import { CustomBackground, FeedbackMessage } from 'components';
import { useHistory } from 'react-router';

function Step3() {
  const { location } = useHistory<{ success: boolean }>();
  return (
    <CustomBackground height={30}>
      <FeedbackMessage success={location.state && location.state?.success} />
    </CustomBackground>
  );
}

export default Step3;
