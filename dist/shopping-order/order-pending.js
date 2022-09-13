"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPending = void 0;
const order_approved_1 = require("./order-approved");
const order_rejected_1 = require("./order-rejected");
class OrderPending {
    constructor(order) {
        this.order = order;
        this.name = "OrderPending";
    }
    getName() {
        return this.name;
    }
    approvePayment() {
        this.order.setState(new order_approved_1.OrderApproved(this.order));
    }
    rejectPayment() {
        this.order.setState(new order_rejected_1.OrderRejected(this.order));
    }
    waitPayment() {
        console.log("O pedido está com PAGAMENTO PENDENTE");
    }
    shipOrder() {
        console.log("Não foi possível enviar o pedido com pagamento pendente!");
    }
}
exports.OrderPending = OrderPending;
