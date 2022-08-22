/*
Prototype with Deep Copy
*/

export interface IPrototype {
  clone(): IPrototype;
}

export class Person implements IPrototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this); // <== Prototype
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address("Av. Brasil", 15);

const person1 = new Person("Karen", 30);
person1.addAddress(address1);

// Foi alterado o endereço real da person1, consequentemente alterando o endereço da person2
person1.addresses[0].street = "Rua 15 de Novembro";

const person2 = person1.clone();

person2.name = "Karl --Person 2";

console.log(person2);
console.log(person2.name);
console.log(person2.addresses);
