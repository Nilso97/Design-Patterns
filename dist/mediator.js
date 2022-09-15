"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mediator = void 0;
class Mediator {
    constructor() {
        this.sellers = [];
    }
    addSeller(...sellers) {
        sellers.forEach((seller) => {
            this.sellers.push(seller);
            seller.setMediator();
        });
    }
    buy(id) {
        let product;
        for (let i = 0; i < this.sellers.length; i++) {
            product = this.sellers[i].sell(id);
            if (product) {
                console.log(`Produto: ${product.id} - ${product.name} - ${product.price}`);
                return;
            }
        }
        console.log("Não encontrei nenhum produco com id", id);
    }
    showProducts() {
        this.sellers.forEach((seller) => seller.showProducts());
    }
}
exports.Mediator = Mediator;
