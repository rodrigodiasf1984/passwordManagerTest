import { Divider as defaultDivider } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';
import theme from 'theme';

type DividerProps = {
  paddingTop?: string;
};

export const Divider = MuiStyled(defaultDivider)<DividerProps>`
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '7rem')};
  border-color: ${theme.palette.background.default}
`;
