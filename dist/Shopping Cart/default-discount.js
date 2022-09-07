"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultDiscount = void 0;
const discount_strategy_1 = require("./discount-strategy");
class DefaultDiscount extends discount_strategy_1.DiscountStrategy {
    constructor() {
        super(...arguments);
        this.discount = 0;
    }
    getDiscount(cart) {
        const total = cart.getTotal();
        if (total >= 100 && total < 200) {
            this.discount = 10;
        }
        else if (total >= 200 && total < 300) {
            this.discount = 20;
        }
        else if (total >= 300) {
            this.discount = 30;
        }
        // Cálculo de porcentagem
        return total - total * (this.discount / 100);
    }
}
exports.DefaultDiscount = DefaultDiscount;
