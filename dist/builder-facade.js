"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderFacade = void 0;
const main_dish_builder_1 = require("./builder/src/classes/main-dish-builder");
const vegan_dish_builder_1 = require("./builder/src/classes/vegan-dish-builder");
class BuilderFacade {
    constructor() {
        /*
          Essa é a fachada para a pasta Builder "builder/src/index.ts" dos estudos anteriores...
          */
        this.mainDishBuilder = new main_dish_builder_1.MainDishBuilder();
        this.veganDishBuilder = new vegan_dish_builder_1.VeganDishBuilder();
    }
    makeMeal1() {
        this.mainDishBuilder.makeMeal();
        console.log(this.mainDishBuilder.getMeal());
        console.log(this.mainDishBuilder.getPrice());
    }
    makeMeal2() {
        this.mainDishBuilder.reset();
        const meal2 = this.mainDishBuilder.makeBeverage();
        console.log(meal2);
    }
    makeMeal3() {
        const veganMeal = this.veganDishBuilder.makeMeal().getMeal();
        console.log(veganMeal);
        console.log(veganMeal.getPrice());
    }
}
exports.BuilderFacade = BuilderFacade;
