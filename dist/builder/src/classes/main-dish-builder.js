"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainDishBuilder = void 0;
const meal_box_1 = require("./meal-box");
const meals_1 = require("./meals");
class MainDishBuilder {
    constructor() {
        this._meal = new meal_box_1.MealBox();
    }
    reset() {
        this._meal = new meal_box_1.MealBox();
        return this;
    }
    makeMeal() {
        const rice = new meals_1.Rice("Arroz", 6.0);
        const beans = new meals_1.Beans("Feijão", 7.0);
        const meat = new meals_1.Meat("Carne", 20.0);
        this._meal.add(rice, beans, meat);
        return this;
    }
    makeBeverage() {
        const beverage = new meals_1.Beverage("Coca Cola", 5.0);
        this._meal.add(beverage);
        return this;
    }
    makeDessert() {
        const dessert = new meals_1.Dessert("Sorvete", 8.0);
        this._meal.add(dessert);
        return this;
    }
    getMeal() {
        return this._meal;
    }
    getPrice() {
        return this._meal.getPrice();
    }
}
exports.MainDishBuilder = MainDishBuilder;
