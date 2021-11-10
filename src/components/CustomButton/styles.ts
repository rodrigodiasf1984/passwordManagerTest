import { Button as defaultButton } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';

type ButtonProps = {
  position: string;
};

export const Button = MuiStyled(defaultButton)<ButtonProps>`
  margin-top: 2rem;
  display: flex;
  align-self: ${props =>
    props.position === 'start' ? 'flex-start' : 'flex-end'};
  width: 10rem;
  font-weight: bold;
  height: 3rem;
  text-transform: capitalize;
`;
