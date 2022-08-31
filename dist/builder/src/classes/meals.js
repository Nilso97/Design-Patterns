"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dessert = exports.Beverage = exports.Meat = exports.Beans = exports.Rice = void 0;
const abstract_meal_1 = require("./abstract-meal");
class Rice extends abstract_meal_1.AbstractMeal {
}
exports.Rice = Rice;
class Beans extends abstract_meal_1.AbstractMeal {
}
exports.Beans = Beans;
class Meat extends abstract_meal_1.AbstractMeal {
}
exports.Meat = Meat;
class Beverage extends abstract_meal_1.AbstractMeal {
}
exports.Beverage = Beverage;
class Dessert extends abstract_meal_1.AbstractMeal {
}
exports.Dessert = Dessert;
