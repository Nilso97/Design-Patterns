"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductComposite = exports.ProductLeaf = exports.ProductComponent = void 0;
// Component
class ProductComponent {
    add(product) { }
    remove(product) { }
}
exports.ProductComponent = ProductComponent;
// Leaf
class ProductLeaf extends ProductComponent {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
exports.ProductLeaf = ProductLeaf;
// Composite
class ProductComposite extends ProductComponent {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    add(...products) {
        products.forEach((product) => this.children.push(product));
    }
    remove(product) {
        const productIndex = this.children.indexOf(product);
        if (productIndex !== -1) {
            this.children.splice(productIndex, 1);
        }
    }
    getPrice() {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
}
exports.ProductComposite = ProductComposite;
// Client code
const T_shirt = new ProductLeaf("Camiseta", 40);
const shorts = new ProductLeaf("Calção", 75);
const pants = new ProductLeaf("Calça", 125);
const productBox = new ProductComposite();
productBox.add(T_shirt, shorts, pants);
const tablet = new ProductLeaf("Tablet", 2000);
const kindle = new ProductLeaf("Kindle", 800);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);
console.log(productBox);
const total = productBox.getPrice();
console.log(`Total: R$${total}`);
