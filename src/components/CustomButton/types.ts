export type ButtonProps = {
  onClick: () => void;
  position: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  icon?: React.ReactElement;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  disabled?: boolean;
};
