import React, { useCallback, useEffect, useState } from 'react';
import {
  CustomBackground,
  Header,
  PasswordStrengthMeter,
  CustomTooltip,
} from 'components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Typography,
  Divider,
  InputAdornment,
  Box,
  Button,
  OutlinedInput,
  FormHelperText,
  IconButton,
} from '@mui/material';
import theme from 'theme';
import { useTranslation } from 'react-i18next';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { submitForm } from 'services/api';
import CircularProgress from '@mui/material/CircularProgress';
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
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(`${t('views.form.errors.passwordRequired')}`)
      .min(8, `${t('views.form.errors.passwordMinLength')}`)
      .max(24, `${t('views.form.errors.passwordMaxLength')}`)
      .matches(
        /^.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?].*$/,
        `${t('views.form.errors.passwordSpecialChar')}`,
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        `${t('views.form.errors.passwordNotMatch')}`,
      )
      .required(`${t('views.form.errors.passwordConfirmRequired')}`),
    passwordHint: yup
      .string()
      .required(`${t('views.form.errors.passwordHintRequired')}`)
      .max(255, `${t('views.form.errors.passwordHintLength')}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange =
    (prop: keyof IFormInputs) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      reset();
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

  const handleSubmitForm = async (data: IFormInputs) => {
    const { password, confirmPassword, passwordHint } = data;
    setIsLoading(true);
    await submitForm(password, confirmPassword, passwordHint).then(
      () => {
        history.push({
          pathname: '/feedback',
          state: { success: true },
        });
      },
      () => {
        history.push({
          pathname: '/feedback',
          state: { success: false },
        });
      },
    );

    setIsLoading(false);
  };

  const handleErrors = useCallback(() => {
    if (errors.password || errors.confirmPassword || errors.passwordHint) {
      setDisabled(true);
    }
    setDisabled(false);
  }, [errors.confirmPassword, errors.password, errors.passwordHint]);

  useEffect(() => {
    handleErrors();
  }, [errors, handleErrors]);

  return (
    <CustomBackground>
      <Header currentStep={2} />
      <Content>
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <CircularProgress color="secondary" sx={{ marginRight: 1 }} />
            <Typography variant="h1" color={theme.palette.secondary.main}>
              {t('views.common.loading')}
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant="h1" color={theme.palette.secondary.main}>
              {t('views.common.title')}
            </Typography>
            <Divider
              sx={{
                marginTop: '1rem',
                width: '2%',
                borderBottomWidth: 3,
              }}
            />
            <Typography variant="h4" paddingTop={3} paddingBottom={3}>
              {t('views.common.descritipion1')}
            </Typography>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ width: '30%', marginRight: '2rem' }}>
                  <Typography
                    variant="h4"
                    paddingTop={1}
                    paddingBottom={1}
                    color={theme.palette.secondary.main}
                    sx={{ fontWeight: 'bold' }}
                  >
                    {t('views.form.labelInputForm1')}
                  </Typography>
                  <OutlinedInput
                    {...register('password', {
                      required: true,
                    })}
                    error={!!errors.password}
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
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <PasswordStrengthMeter password={values.password} />
                  <FormHelperText
                    id="outlined-adornment-password"
                    style={{ color: `${theme.palette.primary.main}` }}
                  >
                    {errors.password && errors.password.message}
                  </FormHelperText>
                </Box>
                <Box sx={{ width: '30%' }}>
                  <Typography
                    variant="h4"
                    paddingTop={1}
                    paddingBottom={1}
                    color={theme.palette.secondary.main}
                    sx={{ fontWeight: 'bold' }}
                  >
                    {t('views.form.labelInputForm2')}
                  </Typography>
                  <OutlinedInput
                    {...register('confirmPassword', {
                      required: true,
                    })}
                    error={!!errors.confirmPassword}
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
                  <FormHelperText
                    id="outlined-adornment-password"
                    style={{ color: `${theme.palette.primary.main}` }}
                  >
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </FormHelperText>
                </Box>
              </Box>
              <Typography variant="h4" paddingTop={5} paddingBottom={1}>
                {t('views.form.infoTextForm')}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Typography
                  variant="h4"
                  paddingTop={1}
                  paddingBottom={1}
                  color={theme.palette.secondary.main}
                  sx={{ fontWeight: 'bold' }}
                >
                  {t('views.form.labelInputForm3')}
                </Typography>
                <CustomTooltip />
              </Box>
              <OutlinedInput
                {...register('passwordHint', {
                  required: false,
                })}
                error={!!errors.passwordHint}
                fullWidth
                id="outlined-adornment-password-hint"
                type="text"
                value={values.passwordHint}
                onChange={handleChange('passwordHint')}
                label="Hint Password"
              />
              <FormHelperText
                id="outlined-adornment-password"
                style={{ color: `${theme.palette.primary.main}` }}
              >
                {errors.passwordHint && errors.passwordHint.message}
              </FormHelperText>
              <Divider
                sx={{
                  paddingTop: `${
                    errors.confirmPassword ||
                    errors.password ||
                    errors.passwordHint
                      ? '14rem'
                      : '16rem'
                  }`,
                  borderColor: '#ccd5da',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
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
                  type="submit"
                  variant="contained"
                  color="secondary"
                  endIcon={<KeyboardArrowRightIcon />}
                  disabled={disabled}
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
            </form>
          </>
        )}
      </Content>
    </CustomBackground>
  );
}

export default Step2;
