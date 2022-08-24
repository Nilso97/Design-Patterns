"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseCar = void 0;
class EnterpriseCar {
    constructor(name, customer) {
        this.name = name;
        this.customer = customer;
    }
    pickup() {
        console.log(`${this.name} está buscando ${this.customer.name}`);
    }
}
exports.EnterpriseCar = EnterpriseCar;
