import React, { useState } from 'react';

import { useHistory } from 'react-router';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Typography, Box, Button, Snackbar } from '@mui/material';
import theme from 'theme';
import { useTranslation } from 'react-i18next';

type FeedbackMessageProps = {
  success: boolean;
};

const FeedbackMessage = ({ success }: FeedbackMessageProps) => {
  const history = useHistory();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  // console.log(success, 'success');

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          border: ` ${!success && `8px solid ${theme.palette.secondary.main}`}`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: '2rem',
          }}
        >
          {success ? (
            <CheckCircleOutlineOutlinedIcon
              color="success"
              sx={{
                display: 'flex',
                marginTop: '1rem',
                marginLeft: '1rem',
                height: 50,
                width: 50,
              }}
            />
          ) : (
            <WarningAmberOutlinedIcon
              color="error"
              sx={{
                display: 'flex',
                marginTop: '1rem',
                marginLeft: '1rem',
                height: 50,
                width: 50,
              }}
            />
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
        </Box>
        <Typography
          variant="h4"
          color={theme.palette.secondary.main}
          sx={{ fontWeight: 'bold', paddingLeft: '5rem' }}
        >
          {success
            ? t('views.feedback.successMessage')
            : t('views.feedback.errorMessage')}
        </Typography>
        <Button
          variant="text"
          color="primary"
          sx={{
            marginTop: '6rem',
            marginBottom: `${!success && '1rem'}`,
            display: 'flex',
            alignSelf: 'flex-end',
            width: `${!success ? '15rem' : '10rem'}`,
            fontWeight: 'bold',
            height: '3rem',
            textTransform: 'capitalize',
          }}
          onClick={() => handleNavigate()}
        >
          {success ? t('button.toAccess') : t('button.backToPM')}
          <KeyboardArrowRightOutlinedIcon />
        </Button>
      </Box>
    </>
  );
};

export default FeedbackMessage;
