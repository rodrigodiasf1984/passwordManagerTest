import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Typography, Snackbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import theme from 'theme';
import { CustomDivider } from 'components';
import {
  Container,
  WrapperIconAndTitle,
  CustomButton,
  CustomWarningIcon,
  CustomSuccessIcon,
} from './styles';

import { FeedbackMessageProps } from './types';

const FeedbackMessage = ({ success }: FeedbackMessageProps) => {
  const history = useHistory();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClose = (event: unknown, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleNavigate = () => {
    if (success) {
      setOpen(true);
      setTimeout(() => {
        history.push('/');
      }, 3000);
    } else {
      history.push('/');
    }
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={`${t('views.common.snackbarMessage')}`}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
      <Container success={success}>
        <WrapperIconAndTitle>
          {success ? (
            <CustomSuccessIcon color="success" />
          ) : (
            <CustomWarningIcon color="error" />
          )}
          <Typography
            variant="h1"
            color={theme.palette.secondary.main}
            sx={{ fontWeight: 'bold', marginLeft: '1rem' }}
          >
            {success
              ? t('views.feedback.successTitle')
              : t('views.feedback.errorTitle')}
          </Typography>
        </WrapperIconAndTitle>
        <Typography
          variant="h4"
          color={theme.palette.secondary.main}
          sx={{ fontWeight: 'bold', paddingLeft: '5rem' }}
        >
          {success
            ? t('views.feedback.successMessage')
            : t('views.feedback.errorMessage')}
        </Typography>
        <CustomDivider paddingTop="4rem" />
        <CustomButton
          success={success}
          variant="text"
          color="primary"
          onClick={() => handleNavigate()}
        >
          {success ? t('button.toAccess') : t('button.backToPM')}
          <KeyboardArrowRightOutlinedIcon />
        </CustomButton>
      </Container>
    </>
  );
};

export default FeedbackMessage;
