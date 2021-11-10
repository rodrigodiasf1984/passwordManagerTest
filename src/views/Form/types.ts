export interface IFormInputs {
  password: string;
  passwordHint: string;
  confirmPassword: string;
}

export interface InitialStateProps extends IFormInputs {
  showPassword: boolean;
  showConfirmPassword: boolean;
}

export type EmptySpaceProps = {
  errorConfirmPassword: boolean;
  errorPassword: boolean;
  errorPasswordHint: boolean;
};

export type FormInputWrapperProps = {
  hasMarginRight?: boolean;
};
