import React from 'react';
import { CustomBackground } from 'components';
import NotFoundImage from 'assets/img/notFound.jpg';
import { Container, Image } from './styles';

const NotFound: React.FC = () => (
  <CustomBackground>
    <Container>
      <Image src={NotFoundImage} alt="Not Found Page" />
      <a href="http://www.freepik.com">Designed by pikisuperstar / Freepik</a>
    </Container>
  </CustomBackground>
);
export default NotFound;
