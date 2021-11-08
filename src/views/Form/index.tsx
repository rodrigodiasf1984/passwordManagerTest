import React, { useState } from 'react';
import { CustomBackground, Header, PasswordStrengthMeter } from 'components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Typography,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Box,
  Button,
} from '@mui/material';
import theme from 'theme';
import { useTranslation } from 'react-i18next';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { Content } from './styles';

type FormSchema = {
  password: string;
  confirmPassword: string;
  passwordHint: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
};

function Step2() {
  const { t } = useTranslation();
  const history = useHistory();
  const [values, setValues] = useState<FormSchema>({
    password: '',
    confirmPassword: '',
    passwordHint: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange =
    (prop: keyof FormSchema) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleSubmit = () => {
    history.push('/form');
  };

  return (
    <CustomBackground>
      <Header currentStep={2} />
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
        <Typography variant="h4" paddingTop={3} paddingBottom={3}>
          {t('views.descritipion1')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ width: '30%', marginRight: '2rem' }}>
              <Typography
                variant="h4"
                paddingTop={1}
                paddingBottom={1}
                color={theme.palette.secondary.main}
                sx={{ fontWeight: 'bold' }}
              >
                Crea tu Contraseña Maestra
              </Typography>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <PasswordStrengthMeter password={values.password} />
            </Box>
            <Box sx={{ width: '30%' }}>
              <Typography
                variant="h4"
                paddingTop={1}
                paddingBottom={1}
                color={theme.palette.secondary.main}
                sx={{ fontWeight: 'bold' }}
              >
                Repite tu Contraseña Maestra
              </Typography>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-confirm-password"
                type={values.showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {values.showConfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
              <PasswordStrengthMeter password={values.confirmPassword} />
            </Box>
          </Box>
          <Typography variant="h4" paddingTop={5} paddingBottom={1}>
            También puedes crear una pista que te ayude a recordar tu contraseña
            maestra.
          </Typography>
          <Typography
            variant="h4"
            paddingTop={1}
            paddingBottom={1}
            color={theme.palette.secondary.main}
            sx={{ fontWeight: 'bold' }}
          >
            Crea tu pista para recordar tu contraseña(opicional)
          </Typography>
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password-hint"
            type="text"
            value={values.passwordHint}
            onChange={handleChange('passwordHint')}
            label="Hint Password"
          />
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
            onClick={() => handleSubmit()}
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

export default Step2;
