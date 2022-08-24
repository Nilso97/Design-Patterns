"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualCar = void 0;
class IndividualCar {
    constructor(name, customer) {
        this.name = name;
        this.customer = customer;
    }
    pickup() {
        console.log(`${this.name} está buscando ${this.customer.name}`);
    }
}
exports.IndividualCar = IndividualCar;
