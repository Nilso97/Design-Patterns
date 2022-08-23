"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicycle = void 0;
// Concrete Product
class Bicycle {
    constructor(name) {
        this.name = name;
    }
    pickUp(customerName) {
        console.log(`${this.name} está buscando ${customerName}`);
    }
    stop() {
        console.log(`${this.name} parou!`);
    }
}
exports.Bicycle = Bicycle;
