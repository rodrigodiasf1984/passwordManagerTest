import React, { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Step from 'components/Step';
import theme from 'theme';
import i18next from 'i18next';
import { Container } from './styles';

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'center',
          margin: '0 auto',
        }}
      >
        <Step name={1} active={currentStep === 1} completed={currentStep > 1} />
        <Divider
          sx={{
            width: '50px',
            borderBottom: '5px solid',
            color:
              currentStep > 1
                ? theme.palette.primary.main
                : theme.palette.secondary.light,
          }}
        />
        <Step name={2} active={currentStep === 2} completed={currentStep > 2} />
        <Divider
          sx={{
            width: '50px',
            borderBottom: '5px solid',
            color:
              currentStep > 2
                ? theme.palette.primary.main
                : theme.palette.secondary.light,
          }}
        />
        <Step name={3} active={currentStep === 3} completed={false} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: '5%',
        }}
      >
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
      </Box>
    </Container>
  );
};

export default Header;
