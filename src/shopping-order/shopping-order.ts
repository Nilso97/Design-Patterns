import { OrderPending } from "./order-pending";
import { IShoppingOrderState } from "./shopping-order-state";

export class ShoppingOrder {
  private state: IShoppingOrderState = new OrderPending(this);

  getState(): IShoppingOrderState {
    return this.state;
  }

  setState(state: IShoppingOrderState): void {
    this.state = state;
    console.log(`Estado do pedido: ${this.getStateName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
