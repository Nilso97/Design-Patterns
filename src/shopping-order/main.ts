import { ShoppingOrder } from "./shopping-order";

const order = new ShoppingOrder(); // Inicia como Pendente

order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();

order.rejectPayment();
order.approvePayment();