import { DiscountStrategy } from "./discount-strategy";
import { IECommerceProductProtocol } from "./e-commerce-product-protocol";

export class ECommerceShoppingCart {
  private products: IECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: IECommerceProductProtocol[]) {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): IECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}