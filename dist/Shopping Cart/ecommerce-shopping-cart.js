"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceShoppingCart = void 0;
const discount_strategy_1 = require("./discount-strategy");
class ECommerceShoppingCart {
    constructor() {
        this.products = [];
        this._discountStrategy = new discount_strategy_1.DiscountStrategy();
    }
    addProduct(...products) {
        products.forEach((product) => this.products.push(product));
    }
    getProducts() {
        return this.products;
    }
    getTotal() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
    getTotalWithDiscount() {
        return this._discountStrategy.getDiscount(this);
    }
    set discount(discount) {
        this._discountStrategy = discount;
    }
}
exports.ECommerceShoppingCart = ECommerceShoppingCart;
