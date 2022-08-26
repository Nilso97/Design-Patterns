export interface IEmailValidatorProtocol {
  isEmail: IEmailValidatorFnProtocol;
}

export interface IEmailValidatorFnProtocol {
  (value: string): boolean;
}
