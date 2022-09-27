"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cigarette = void 0;
const product_1 = require("./product");
class Cigarette extends product_1.Product {
    constructor(price) {
        super("Cigarette", price);
        this.price = price;
    }
    getPriceWithTaxes(visitor) {
        return visitor.calculateTaxesForCigarette(this);
    }
}
exports.Cigarette = Cigarette;
