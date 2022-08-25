"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationComposite = exports.ValidateNumber = exports.ValidateString = exports.ValidateEmail = exports.ValidationComponent = void 0;
// Component
class ValidationComponent {
}
exports.ValidationComponent = ValidationComponent;
// Leaf 1
class ValidateEmail extends ValidationComponent {
    validate(value) {
        if (typeof value !== "string") { // <== type guards
            return false;
        }
        return /@/.test(value); // <== Regex
    }
}
exports.ValidateEmail = ValidateEmail;
// Leaf 2
class ValidateString extends ValidationComponent {
    validate(value) {
        return typeof value === "string";
    }
}
exports.ValidateString = ValidateString;
// Leaf 3
class ValidateNumber extends ValidationComponent {
    validate(value) {
        return typeof value === "number";
    }
}
exports.ValidateNumber = ValidateNumber;
// Composite
class ValidationComposite extends ValidationComponent {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    validate(value) {
        for (const child of this.children) {
            const validation = child.validate(value);
            if (!validation)
                return false;
        }
        return true;
    }
    add(...validations) {
        validations.forEach((validation) => this.children.push(validation));
    }
}
exports.ValidationComposite = ValidationComposite;
// Client code
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();
const validationComposite = new ValidationComposite();
validationComposite.add(validateString, validateEmail, validateNumber);
console.log(validationComposite.validate('admin123@email.com'));
