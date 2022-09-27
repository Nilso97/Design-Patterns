"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const product_1 = require("./product");
class Food extends product_1.Product {
    constructor(price) {
        super("Food", price);
        this.price = price;
    }
    getPriceWithTaxes(visitor) {
        return visitor.calculateTaxesForFood(this);
    }
}
exports.Food = Food;
