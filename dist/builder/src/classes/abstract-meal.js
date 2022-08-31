"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractMeal = void 0;
class AbstractMeal {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
exports.AbstractMeal = AbstractMeal;
