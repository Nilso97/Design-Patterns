import { TaxVisitorProtocol } from "./interfaces/tax-visitor-protocol";
import { Product } from "./product";

export class AlcoholicDrink extends Product {
  constructor(protected price: number) {
    super("Alcoholic drink", price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
