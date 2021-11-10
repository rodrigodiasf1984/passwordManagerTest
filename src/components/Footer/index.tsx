/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomDivider, CustomButton } from 'components';
import { WapperButtons } from './styles';
import { FooterProps } from './types';

const Footer = ({
  historyPath,
  onClick,
  isSubmitButton,
  isDisabledButton,
}: FooterProps) => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <>
      <CustomDivider />
      <WapperButtons>
        <CustomButton
          type="button"
          position="start"
          variant="text"
          onClick={() => history.goBack()}
        >
          {t('button.cancel')}
        </CustomButton>
        <CustomButton
          type={isSubmitButton ? 'submit' : 'button'}
          position="end"
          onClick={onClick ? () => history.push(`${historyPath}`) : () => {}}
          variant="contained"
          icon={<KeyboardArrowRightIcon />}
          disabled={isDisabledButton}
        >
          {t('button.next')}
        </CustomButton>
      </WapperButtons>
    </>
  );
};

export default Footer;
