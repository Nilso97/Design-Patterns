import { Mediator } from "./mediator";
import { SellerProduct } from "./seller-product";

export class Seller {
  buy(arg0: string) {
      throw new Error("Method not implemented.");
  }
  viewProducts() {
      throw new Error("Method not implemented.");
  }
  private products: Array<SellerProduct> = [];
  private mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((product) =>
      console.log(
        `Id: ${product.id}, Produto: ${product.name}, Preço: ${product.price}`
      )
    );
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  setMediator(): void {
    this.mediator = this.mediator;
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex === -1) return;

    const product = this.products.splice(productIndex, 1);
    return product[0];
  }
}
