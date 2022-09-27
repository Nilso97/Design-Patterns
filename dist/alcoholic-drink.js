"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlcoholicDrink = void 0;
const product_1 = require("./product");
class AlcoholicDrink extends product_1.Product {
    constructor(price) {
        super("Alcoholic drink", price);
        this.price = price;
    }
    getPriceWithTaxes(visitor) {
        return visitor.calculateTaxesForAlcoholicDrink(this);
    }
}
exports.AlcoholicDrink = AlcoholicDrink;
