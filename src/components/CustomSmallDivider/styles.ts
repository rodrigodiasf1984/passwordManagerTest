import { Divider } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';
import { converterToRem } from 'utils/converterToRem';

export const CustomDivider = MuiStyled(Divider)`
  border-bottom-width: ${converterToRem(5)}rem;
  width:${converterToRem(40)}rem;
  margin-top: ${converterToRem(10)}rem;
`;
