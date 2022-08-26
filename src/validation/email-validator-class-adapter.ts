import isEmail from "validator/lib/isEmail";
import { IEmailValidatorProtocol } from "./email-validator-protocol";

export class EmailValidatorClassAdapter implements IEmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
