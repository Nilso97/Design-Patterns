"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingOrder = void 0;
const order_pending_1 = require("./order-pending");
class ShoppingOrder {
    constructor() {
        this.state = new order_pending_1.OrderPending(this);
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        console.log(`Estado do pedido: ${this.getStateName()}`);
    }
    getStateName() {
        return this.state.getName();
    }
    approvePayment() {
        this.state.approvePayment();
    }
    rejectPayment() {
        this.state.rejectPayment();
    }
    waitPayment() {
        this.state.waitPayment();
    }
    shipOrder() {
        this.state.shipOrder();
    }
}
exports.ShoppingOrder = ShoppingOrder;
