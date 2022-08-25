// Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf 1
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== "string") { // <== type guards
      return false;
    }

    return /@/.test(value); // <== Regex
  }
}

// Leaf 2
export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "string";
  }
}

// Leaf 3
export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "number";
  }
}

// Composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);

      if (!validation) return false;
    }

    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

// Client code
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

const validationComposite = new ValidationComposite();
validationComposite.add(validateString, validateEmail, validateNumber);

console.log(validationComposite.validate("admin123@email.com")); // false: precisa ter um number
