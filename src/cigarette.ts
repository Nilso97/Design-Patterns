import { TaxVisitorProtocol } from "./interfaces/tax-visitor-protocol";
import { Product } from "./product";

export class Cigarette extends Product {
  constructor(protected price: number) {
    super("Cigarette", price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
