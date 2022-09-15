"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buyer = void 0;
class Buyer {
    constructor(mediator) {
        this.mediator = mediator;
    }
    viewProducts() {
        this.mediator.showProducts();
    }
    buy(id) {
        this.mediator.buy(id);
    }
}
exports.Buyer = Buyer;
