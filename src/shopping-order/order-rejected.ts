import { ShoppingOrder } from "./shopping-order";
import { IShoppingOrderState } from "./shopping-order-state";

export class OrderRejected implements IShoppingOrderState {
  private name = "OrderReject";

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log(
      "Não foi possível aprovar o pagamento, pois o pedido foi recusado!"
    );
  }

  rejectPayment(): void {
    console.log(
      "Não foi possível rejeitar o pagamento, pois o pedido foi recusado!"
    );
  }

  waitPayment(): void {
    console.log(
      "Não foi possível mover o pagamento para pendente, pois o pedido foi recusado!"
    );
  }

  shipOrder(): void {
    console.log("Não foi possível enviar o pedido, pois o mesmo foi recusado!");
  }
}
