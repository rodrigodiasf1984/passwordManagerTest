import React from 'react';
import { Divider } from './styles';
import { CustomDividerProps } from './types';

const CustomDivider = ({ paddingTop }: CustomDividerProps) => (
  <Divider paddingTop={paddingTop} />
);

export default CustomDivider;
