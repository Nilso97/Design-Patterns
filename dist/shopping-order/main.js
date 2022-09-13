"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopping_order_1 = require("./shopping-order");
const order = new shopping_order_1.ShoppingOrder(); // Inicia como Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();
order.rejectPayment();
order.approvePayment();
