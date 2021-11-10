import { Divider as defaultDivider } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';
import theme from 'theme';

type DividerProps = {
  paddingTop?: string;
};

export const Divider = MuiStyled(defaultDivider)<DividerProps>`
  border-color: ${theme.palette.background.default};
  margin-top: 1rem;
  @media(min-width: 1025px){
    margin-top: ${props => (props.paddingTop ? props.paddingTop : '7rem')};
   }
`;
