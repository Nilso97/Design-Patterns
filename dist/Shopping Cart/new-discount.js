"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewDiscount = void 0;
const discount_strategy_1 = require("./discount-strategy");
class NewDiscount extends discount_strategy_1.DiscountStrategy {
    constructor() {
        super(...arguments);
        this.discount = 0;
    }
    getDiscount(cart) {
        const total = cart.getTotal();
        if (total >= 50 && total < 100) {
            this.discount = 5;
        }
        // Cálculo de porcentagem
        return total - total * (this.discount / 100);
    }
}
exports.NewDiscount = NewDiscount;
