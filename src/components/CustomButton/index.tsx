/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Button } from './styles';

type ButtonProps = {
  onClick: () => void;
  position: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  icon?: React.ReactElement;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  disabled?: boolean;
};
const CustomButton = ({
  onClick,
  position,
  type,
  children,
  icon,
  variant,
  disabled,
}: ButtonProps) => (
  <Button
    type={type}
    position={position}
    variant={variant}
    color="secondary"
    onClick={onClick ? () => onClick() : () => {}}
    endIcon={icon}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default CustomButton;
