import { Typography, Box, Divider, Button } from '@mui/material';
import { CustomBackground, Header } from 'components';
import React from 'react';
import group3Image from 'assets/img/group-3.svg';
import groupImage from 'assets/img/group.svg';

import theme from 'theme';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Content } from './styles';

function Step1() {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <CustomBackground>
      <Header currentStep={1} />
      <Content>
        <Typography variant="h1" color={theme.palette.secondary.main}>
          {t('views.title')}
        </Typography>
        <Divider
          sx={{
            marginTop: '1rem',
            width: '2%',
            borderBottomWidth: 3,
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1rem',
              padding: '2rem 5rem',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <img src={groupImage} alt="group" />
              <Typography variant="h4" maxWidth={300} paddingTop={5}>
                {t('views.imageLeftDescription')}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <img src={group3Image} alt="group" />
              <Typography
                variant="h4"
                maxWidth={300}
                paddingTop={5}
                color={theme.palette.secondary.main}
              >
                {t('views.imageRightDescription')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h3" color={theme.palette.secondary.main}>
            {t('views.subtitle')}
          </Typography>
          <Typography variant="h4" paddingTop={3} paddingBottom={3}>
            {t('views.descritipion1')}
          </Typography>
          <Typography variant="h3" color={theme.palette.secondary.main}>
            {t('views.subtitle2')}
          </Typography>
          <Typography variant="h4" paddingTop={3}>
            {t('views.descritipion2')}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: '5rem',
          }}
        >
          <Button
            variant="text"
            color="secondary"
            sx={{
              marginTop: '2rem',
              display: 'flex',
              alignSelf: 'flex-start',
              width: '10rem',
              fontWeight: 'bold',
              height: '3rem',
              textTransform: 'capitalize',
            }}
            onClick={() => history.goBack()}
          >
            {t('button.cancel')}
          </Button>
          <Button
            onClick={() => history.push('/form')}
            variant="contained"
            color="secondary"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              marginTop: '2rem',
              display: 'flex',
              alignSelf: 'flex-end',
              width: '10rem',
              height: '3rem',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            {t('button.next')}
          </Button>
        </Box>
      </Content>
    </CustomBackground>
  );
}

export default Step1;
