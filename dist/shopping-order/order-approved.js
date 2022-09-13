"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderApproved = void 0;
const order_pending_1 = require("./order-pending");
const order_rejected_1 = require("./order-rejected");
class OrderApproved {
    constructor(order) {
        this.order = order;
        this.name = "OrderApproved";
    }
    getName() {
        return this.name;
    }
    approvePayment() {
        console.log("O pedido já se encontra APROVADO");
    }
    rejectPayment() {
        this.order.setState(new order_rejected_1.OrderRejected(this.order));
    }
    waitPayment() {
        this.order.setState(new order_pending_1.OrderPending(this.order));
    }
    shipOrder() {
        console.log("Enviando pedido para o cliente...");
    }
}
exports.OrderApproved = OrderApproved;
