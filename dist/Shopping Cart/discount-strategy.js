"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountStrategy = void 0;
class DiscountStrategy {
    constructor() {
        this.discount = 0;
    }
    getDiscount(cart) {
        return cart.getTotal();
    }
}
exports.DiscountStrategy = DiscountStrategy;
