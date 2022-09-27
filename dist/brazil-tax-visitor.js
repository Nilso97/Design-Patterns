"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrazilTaxVisitor = void 0;
class BrazilTaxVisitor {
    calculateTaxesForFood(food) {
        return food.getPrice() + food.getPrice() * 0.05;
    }
    calculateTaxesForAlcoholicDrink(alcoholicDrink) {
        return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
    }
    calculateTaxesForCigarette(cigarette) {
        return cigarette.getPrice() + cigarette.getPrice() * 1.5;
    }
}
exports.BrazilTaxVisitor = BrazilTaxVisitor;
