import React from 'react';
import { CustomBackground } from 'components';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <CustomBackground>
      <Container>
        <h2>404</h2>
        <p>{t('notFound')}</p>
      </Container>
    </CustomBackground>
  );
};
export default NotFound;
