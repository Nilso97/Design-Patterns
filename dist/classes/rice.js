"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rice = void 0;
const abstract_meal_1 = require("./abstract-meal");
class Rice extends abstract_meal_1.AbstractMeal {
}
exports.Rice = Rice;
const rice = new Rice("Arroz", 6.00);
console.log(rice);
