"use strict";
const personPrototype = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};
const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = "Michael";
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
