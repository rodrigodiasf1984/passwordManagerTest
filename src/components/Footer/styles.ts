import styled from 'styled-components';
import { Divider, Button } from '@mui/material';
import { styled as MuiStyled } from '@mui/material/styles';
import theme from 'theme';

type ButtonProps = {
  position: string;
};

export const WapperButtons = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CustomButton = MuiStyled(Button)<ButtonProps>`
  margin-top: 2rem;
  display: flex;
  align-self: ${props =>
    props.position === 'start' ? 'flex-start' : 'flex-end'};
  width: 10rem;
  font-weight: bold;
  height: 3rem;
  text-transform: capitalize;
`;

export const CustomDivider = MuiStyled(Divider)`
  padding-top: 5rem;
  border-color: ${theme.palette.background.default}
`;
