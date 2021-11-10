import React, { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Step from 'components/Step';
import theme from 'theme';
import i18next from 'i18next';
import Logo from 'assets/img/logo_openbank.png';
import { Container, WrapperLang, WrapperSteps, CustomDivider } from './styles';

type HeaderProps = {
  currentStep: number;
};

const Header = ({ currentStep }: HeaderProps) => {
  const langFromStorage = localStorage.getItem('i18nextLng');
  const [lang, setLang] = useState('en');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
    localStorage.setItem('i18nextLng', event.target.value as string);
  };

  useEffect(() => {
    if (langFromStorage) {
      setLang(langFromStorage);
    }
    i18next.changeLanguage(lang);
  }, [lang, langFromStorage]);

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <WrapperSteps>
        <Step name={1} active={currentStep === 1} completed={currentStep > 1} />
        <CustomDivider currentStep={currentStep} biggerThan={1} />
        <Step name={2} active={currentStep === 2} completed={currentStep > 2} />
        <CustomDivider currentStep={currentStep} biggerThan={2} />
        <Step name={3} active={currentStep === 3} completed={false} />
      </WrapperSteps>
      <WrapperLang>
        <FormControl fullWidth>
          <InputLabel
            id="select-lang-input"
            sx={{ color: theme.palette.primary.main }}
          >
            Lang
          </InputLabel>
          <Select
            labelId="select-lang-input"
            id="lang-select"
            value={lang}
            label="Lang"
            onChange={handleChange}
          >
            <MenuItem value="pt-BR">PT</MenuItem>
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="es">ES</MenuItem>
          </Select>
        </FormControl>
      </WrapperLang>
    </Container>
  );
};

export default Header;
