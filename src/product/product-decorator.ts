import { IProductProtocol } from "./product-protocol";

export class ProductDecorator implements IProductProtocol {
  constructor(protected product: IProductProtocol) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
