"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDecorator = void 0;
class ProductDecorator {
    constructor(product) {
        this.product = product;
    }
    getName() {
        return this.product.getName();
    }
    getPrice() {
        return this.product.getPrice();
    }
}
exports.ProductDecorator = ProductDecorator;
