/*
Prototype with Shallow Copy
*/

export interface IPrototype {
  clone(): IPrototype;
}

export class Person implements IPrototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements IPrototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address("Av. Brasil", 15);

const person1 = new Person("Karen --Person 1", 30);
person1.addAddress(address1);

const person2 = person1.clone();

// Foi alterado o endereço real da person1, consequentemente alterando o endereço da person2
person1.addresses[0].street = "Rua 15 de Novembro";

person2.name = "Karl --Person 2";

console.log(person1);
console.log(person1.addresses);

console.log();

console.log(person2);
console.log(person2.addresses);
