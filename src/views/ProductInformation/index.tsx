import { Typography } from '@mui/material';
import { CustomBackground, Header } from 'components';
import { useTranslation } from 'react-i18next';
import React from 'react';
import group3Image from 'assets/img/group-3.svg';
import groupImage from 'assets/img/group.svg';
import theme from 'theme';
import Footer from 'components/Footer';
import {
  Content,
  CustomDivider,
  ContentWrapper,
  WrapperImagesAndDescription,
  WrapperImageAndDescription,
} from './styles';

function Step1() {
  const { t } = useTranslation();

  return (
    <CustomBackground>
      <Header currentStep={1} />
      <Content>
        <Typography variant="h1" color={theme.palette.secondary.main}>
          {t('views.common.title')}
        </Typography>
        <CustomDivider />
        <ContentWrapper>
          <WrapperImagesAndDescription>
            <WrapperImageAndDescription>
              <img src={groupImage} alt="group" />
              <Typography variant="h4" maxWidth={300} paddingTop={5}>
                {t('views.common.imageLeftDescription')}
              </Typography>
            </WrapperImageAndDescription>
            <WrapperImageAndDescription>
              <img src={group3Image} alt="group" />
              <Typography
                variant="h4"
                maxWidth={300}
                paddingTop={5}
                color={theme.palette.secondary.main}
              >
                {t('views.common.imageRightDescription')}
              </Typography>
            </WrapperImageAndDescription>
          </WrapperImagesAndDescription>
          <Typography variant="h3" color={theme.palette.secondary.main}>
            {t('views.common.subtitle')}
          </Typography>
          <Typography variant="h4" paddingTop={3} paddingBottom={3}>
            {t('views.common.descritipion1')}
          </Typography>
          <Typography variant="h3" color={theme.palette.secondary.main}>
            {t('views.common.subtitle2')}
          </Typography>
          <Typography variant="h4" paddingTop={3}>
            {t('views.common.descritipion2')}
          </Typography>
        </ContentWrapper>
        <Footer />
      </Content>
    </CustomBackground>
  );
}

export default Step1;
