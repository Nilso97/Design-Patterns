"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Concrete Product
class Car {
    constructor(name) {
        this.name = name;
    }
    pickUp(customerName) {
        console.log(`${this.name} está buscando o ${customerName}`);
    }
    stop() {
        console.log(`${this.name} parou!`);
    }
}
exports.Car = Car;
