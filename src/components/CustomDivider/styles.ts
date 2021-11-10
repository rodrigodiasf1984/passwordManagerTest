import { Divider as defaultDivider } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';
import theme from 'theme';

export const Divider = MuiStyled(defaultDivider)`
  padding-top: 7rem;
  border-color: ${theme.palette.background.default}
`;
