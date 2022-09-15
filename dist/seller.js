"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
class Seller {
    constructor() {
        this.products = [];
    }
    buy(arg0) {
        throw new Error("Method not implemented.");
    }
    viewProducts() {
        throw new Error("Method not implemented.");
    }
    showProducts() {
        this.products.forEach((product) => console.log(`Id: ${product.id}, Produto: ${product.name}, Preço: ${product.price}`));
    }
    addProduct(...products) {
        products.forEach((product) => this.products.push(product));
    }
    setMediator() {
        this.mediator = this.mediator;
    }
    sell(id) {
        const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex === -1)
            return;
        const product = this.products.splice(productIndex, 1);
        return product[0];
    }
}
exports.Seller = Seller;
