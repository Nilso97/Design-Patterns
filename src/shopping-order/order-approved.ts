import { OrderPending } from "./order-pending";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrder } from "./shopping-order";
import { IShoppingOrderState } from "./shopping-order-state";

export class OrderApproved implements IShoppingOrderState {
  private name = "OrderApproved";

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log("O pedido já se encontra APROVADO");
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    this.order.setState(new OrderPending(this.order));
  }

  shipOrder(): void {
    console.log("Enviando pedido para o cliente...");
  }
}
