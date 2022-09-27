"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USTaxVisitor = void 0;
class USTaxVisitor {
    calculateTaxesForFood(food) {
        return food.getPrice() + food.getPrice() * 0.15;
    }
    calculateTaxesForAlcoholicDrink(alcoholicDrink) {
        return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 2;
    }
    calculateTaxesForCigarette(cigarette) {
        return cigarette.getPrice() + cigarette.getPrice() * 1;
    }
}
exports.USTaxVisitor = USTaxVisitor;
