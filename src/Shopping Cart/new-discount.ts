import { DiscountStrategy } from "./discount-strategy";
import { ECommerceShoppingCart } from "./e-commerce-shopping-cart";

export class NewDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 50 && total < 100) {
      this.discount = 5;
    }

    // Cálculo de porcentagem
    return total - total * (this.discount / 100);
  }
}
