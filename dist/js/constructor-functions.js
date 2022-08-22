"use strict";
function Person(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
}
const personPrototype = {
    firstName: "John",
    lastName: "Doe",
    age: 34,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};
Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;
SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;
function SubPerson(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromSubClass = "Hello";
}
const person1 = new Person("Michael", "Hurtson", 45);
console.log(person1);
console.log(person1.fullName());
const person2 = new SubPerson("Suzan", "Winters", 67);
console.log(person2);
console.log(person2.fullName());
