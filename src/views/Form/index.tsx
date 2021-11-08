import React, { useState } from 'react';
import { CustomBackground, Header, PasswordStrengthMeter } from 'components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Typography,
  Divider,
  IconButton,
  InputAdornment,
  Box,
  Button,
  TextField,
} from '@mui/material';
import theme from 'theme';
import { useTranslation } from 'react-i18next';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { Content } from './styles';

interface IFormInputs {
  password: string;
  passwordHint: string;
  confirmPassword: string;
}

interface InitialStateProps extends IFormInputs {
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const schema = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
  passwordHint: yup.string().required(),
});

// const schema = yup.object().shape({
//   password: yup
//     .string()
//     .required('Password is required')
//     .min(8, 'Password must be at least 8 characters long')
//     .max(24, 'Password must be less than 24 characters long')
//     .matches(
//       /^.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?].*$/,
//       'Need one special character',
//     ),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Passwords must match')
//     .required('Password confirm is required'),
//   passwordHint: yup.string().required().max(255, 'Password hint must be less than 255 characters long'),
// });

function Step2() {
  const { t } = useTranslation();
  const history = useHistory();
  const [values, setValues] = useState<InitialStateProps>({
    password: '',
    confirmPassword: '',
    passwordHint: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange =
    (prop: keyof IFormInputs) =>
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

  const handleSubmitForm = (data: IFormInputs) => {
    console.log(data);
    console.log(errors, 'errors');
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
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          // sx={{ mt: 1 }}
        >
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
              <TextField
                {...register('password', {
                  required: true,
                })}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                InputProps={
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
              <TextField
                {...register('confirmPassword', {
                  required: true,
                })}
                error={!!errors.confirmPassword}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword : ''
                }
                fullWidth
                id="outlined-adornment-confirm-password"
                type={values.showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                InputProps={
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
          <TextField
            {...register('passwordHint', {
              required: false,
            })}
            error={!!errors.passwordHint}
            helperText={errors.passwordHint}
            fullWidth
            id="outlined-adornment-password-hint"
            type="text"
            value={values.passwordHint}
            onChange={handleChange('passwordHint')}
            label="Hint Password"
          />
        </form>
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
            onClick={() =>
              handleSubmitForm({
                password: values.password,
                confirmPassword: values.confirmPassword,
                passwordHint: values.passwordHint,
              })
            }
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
