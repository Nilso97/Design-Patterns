import { DefaultDiscount } from "./Shopping Cart/default-discount";
import { ECommerceShoppingCart } from "./Shopping Cart/e-commerce-shopping-cart";
import { NewDiscount } from "./Shopping Cart/new-discount";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
//shoppingCart.discount = new NewDiscount();

shoppingCart.addProduct({ name: "Camiseta Polo", price: 50 });
shoppingCart.addProduct({ name: "Camiseta Jeans", price: 50 });
shoppingCart.addProduct({ name: "Calça Jeans", price: 180.5 });

console.log(`De: ${shoppingCart.getTotal()} R$`);
console.log(
  `Ficou para: ${shoppingCart.getTotalWithDiscount()} R$ com descontos!`
);
