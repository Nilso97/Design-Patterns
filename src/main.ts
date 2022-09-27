import { AlcoholicDrink } from "./alcoholic-drink";
import { BrazilTaxVisitor } from "./brazil-tax-visitor";
import { Cigarette } from "./cigarette";
import { Food } from "./food";
import { USTaxVisitor } from "./us-tax-visitor";

const food = new Food(13.0);
const alcoholicDrink = new AlcoholicDrink(8.0);
const cigarette = new Cigarette(8.5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, alcoholicDrink, cigarette];

const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);

const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0
);

const totalWithTaxesUs = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum,
  0
);

console.log(`Total: ${total}`);
console.log(`Total com taxas (Brazil): ${totalWithTaxesBrazil}`);
console.log(`Total com taxas (US): ${totalWithTaxesUs}`);
