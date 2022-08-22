"use strict";
/*
Prototype with Shallow Copy
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.addresses = [];
    }
    clone() {
        const newObj = new Person(this.name, this.age);
        newObj.addresses = this.addresses.map((item) => item.clone());
        return newObj;
    }
    addAddress(address) {
        this.addresses.push(address);
    }
}
exports.Person = Person;
class Address {
    constructor(street, number) {
        this.street = street;
        this.number = number;
    }
    clone() {
        return new Address(this.street, this.number);
    }
}
exports.Address = Address;
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
