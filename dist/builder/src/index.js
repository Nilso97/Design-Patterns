"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_dish_builder_1 = require("./classes/main-dish-builder");
const vegan_dish_builder_1 = require("./classes/vegan-dish-builder");
const mainDishBuilder = new main_dish_builder_1.MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());
mainDishBuilder.reset();
// Reset my dish
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);
// Vegan dish
const veganDishBuilder = new vegan_dish_builder_1.VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
