"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mediator_1 = require("./mediator");
const seller_1 = require("./seller");
const mediator = new mediator_1.Mediator();
const seller1 = new seller_1.Seller();
seller1.addProduct({ id: "1", name: "Camiseta", price: 49.9 });
seller1.addProduct({ id: "2", name: "Tênis", price: 129.9 });
const seller2 = new seller_1.Seller();
seller2.addProduct({ id: "3", name: "Calça Jeans", price: 110.0 });
seller2.addProduct({ id: "4", name: "Blusa Moletom", price: 85.9 });
mediator.addSeller(seller1, seller2);
console.log("SELLER - VENDEDOR(a)");
mediator.showProducts();
// const buyer = new Buyer(mediator);
console.log("BUYER - COMPRADOR(a)");
seller2.viewProducts();
seller2.buy("2");
seller2.buy("3");
seller2.viewProducts();
