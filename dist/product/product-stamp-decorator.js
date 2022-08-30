"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStampDecorator = void 0;
const product_decorator_1 = require("./product-decorator");
// Decorator
class ProductStampDecorator extends product_decorator_1.ProductDecorator {
    getName() {
        return this.product.getName() + " (Estampada)";
    }
    getPrice() {
        return this.product.getPrice() + 10;
    }
}
exports.ProductStampDecorator = ProductStampDecorator;
