import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomButton, WapperButtons, CustomDivider } from './styles';

const Footer = () => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <>
      <CustomDivider />
      <WapperButtons>
        <CustomButton
          position="start"
          variant="text"
          color="secondary"
          onClick={() => history.goBack()}
        >
          {t('button.cancel')}
        </CustomButton>
        <CustomButton
          position="end"
          onClick={() => history.push('/form')}
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          {t('button.next')}
        </CustomButton>
      </WapperButtons>
    </>
  );
};

export default Footer;
