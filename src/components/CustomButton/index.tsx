/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Button } from './styles';
import { ButtonProps } from './types';

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
