// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex !== -1) {
      this.children.splice(productIndex, 1);
    }
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client code
const T_shirt = new ProductLeaf("Camiseta", 40);
const shorts = new ProductLeaf("Calção", 75);
const pants = new ProductLeaf("Calça", 125);

const productBox = new ProductComposite();
productBox.add(T_shirt, shorts, pants);

const tablet = new ProductLeaf("Tablet", 2_000);
const kindle = new ProductLeaf("Kindle", 800);

const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);

productBox.add(anotherProductBox);

console.log(productBox);

const total = productBox.getPrice();
console.log(`Total: R$${total}`);
