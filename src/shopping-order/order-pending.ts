import { OrderApproved } from "./order-approved";
import { OrderRejected } from "./order-rejected";
import { ShoppingOrder } from "./shopping-order";
import { IShoppingOrderState } from "./shopping-order-state";

export class OrderPending implements IShoppingOrderState {
  private name = "OrderPending";

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log("O pedido está com PAGAMENTO PENDENTE");
  }

  shipOrder(): void {
    console.log("Não foi possível enviar o pedido com pagamento pendente!");
  }
}
