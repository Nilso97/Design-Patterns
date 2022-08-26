import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-function";
import {
  IEmailValidatorFnProtocol,
  IEmailValidatorProtocol,
} from "./validation/email-validator-protocol";

function validateEmailClass(
  emailValidator: IEmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log("E-mail é válido! -- (CLASS) --");
  } else {
    console.log("E-mail é inválido! -- (CLASS) --");
  }
}

function validateEmailFn(
  emailValidator: IEmailValidatorFnProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log("E-mail é válido! -- (FUNCTION) --");
  } else {
    console.log("E-mail é inválido! -- (FUNCTION) --");
  }
}

const email = "john.doe@email.com";

validateEmailClass(new EmailValidatorClassAdapter(), email);
validateEmailFn(emailValidatorFnAdapter, email);
