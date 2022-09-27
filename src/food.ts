import { TaxVisitorProtocol } from "./interfaces/tax-visitor-protocol";
import { Product } from "./product";

export class Food extends Product {
  constructor(protected price: number) {
    super("Food", price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForFood(this);
  }
}
