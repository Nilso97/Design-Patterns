"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRejected = void 0;
class OrderRejected {
    constructor(order) {
        this.order = order;
        this.name = "OrderReject";
    }
    getName() {
        return this.name;
    }
    approvePayment() {
        console.log("Não foi possível aprovar o pagamento, pois o pedido foi recusado!");
    }
    rejectPayment() {
        console.log("Não foi possível rejeitar o pagamento, pois o pedido foi recusado!");
    }
    waitPayment() {
        console.log("Não foi possível mover o pagamento para pendente, pois o pedido foi recusado!");
    }
    shipOrder() {
        console.log("Não foi possível enviar o pedido, pois o mesmo foi recusado!");
    }
}
exports.OrderRejected = OrderRejected;
