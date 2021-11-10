export interface IFormInputs {
  password: string;
  passwordHint: string;
  confirmPassword: string;
}

export interface InitialStateProps extends IFormInputs {
  showPassword: boolean;
  showConfirmPassword: boolean;
}
