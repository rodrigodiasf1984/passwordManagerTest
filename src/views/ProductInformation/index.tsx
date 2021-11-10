import { Typography, Box } from '@mui/material';
import {
  CustomBackground,
  Header,
  Footer,
  CustomSmallDivider,
} from 'components';
import { useTranslation } from 'react-i18next';
import React from 'react';
import group3Image from 'assets/img/group-3.svg';
import groupImage from 'assets/img/group.svg';
import theme from 'theme';
import {
  Content,
  ContentWrapper,
  WrapperImagesAndDescription,
  WrapperImageAndDescription,
  WrapperTextsAndFooter,
} from './styles';

function Step1() {
  const { t } = useTranslation();

  return (
    <CustomBackground>
      <Header currentStep={1} />
      <Content>
        <Box>
          <Typography variant="h1" color={theme.palette.secondary.main}>
            {t('views.common.title')}
          </Typography>
          <CustomSmallDivider />
        </Box>
        <ContentWrapper>
          <WrapperImagesAndDescription>
            <WrapperImageAndDescription>
              <img className="firstImage" src={groupImage} alt="group" />
              <Typography variant="h4" maxWidth={300}>
                {t('views.common.imageLeftDescription')}
              </Typography>
            </WrapperImageAndDescription>
            <WrapperImageAndDescription>
              <img className="secondImage" src={group3Image} alt="group" />
              <Typography
                variant="h4"
                maxWidth={300}
                color={theme.palette.secondary.main}
              >
                {t('views.common.imageRightDescription')}
              </Typography>
            </WrapperImageAndDescription>
          </WrapperImagesAndDescription>
          <WrapperTextsAndFooter>
            <Typography
              variant="h3"
              color={theme.palette.secondary.main}
              paddingTop={2}
            >
              {t('views.common.subtitle')}
            </Typography>
            <Typography variant="h4" paddingTop={2}>
              {t('views.common.descritipion1')}
            </Typography>
            <Typography
              variant="h3"
              color={theme.palette.secondary.main}
              paddingTop={2}
            >
              {t('views.common.subtitle2')}
            </Typography>
            <Typography variant="h4" paddingTop={2}>
              {t('views.common.descritipion2')}
            </Typography>
            <Footer historyPath="/form" onClick />
          </WrapperTextsAndFooter>
        </ContentWrapper>
      </Content>
    </CustomBackground>
  );
}

export default Step1;
