"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_validator_class_adapter_1 = require("./validation/email-validator-class-adapter");
const email_validator_function_1 = require("./validation/email-validator-function");
function validateEmailClass(emailValidator, email) {
    if (emailValidator.isEmail(email)) {
        console.log("E-mail é válido! -- (CLASS) --");
    }
    else {
        console.log("E-mail é inválido! -- (CLASS) --");
    }
}
function validateEmailFn(emailValidator, email) {
    if (emailValidator(email)) {
        console.log("E-mail é válido! -- (FUNCTION) --");
    }
    else {
        console.log("E-mail é inválido! -- (FUNCTION) --");
    }
}
const email = "john.doe@email.com";
validateEmailClass(new email_validator_class_adapter_1.EmailValidatorClassAdapter(), email);
validateEmailFn(email_validator_function_1.emailValidatorFnAdapter, email);
