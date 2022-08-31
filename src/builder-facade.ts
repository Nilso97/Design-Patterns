import { MainDishBuilder } from "./builder/src/classes/main-dish-builder";
import { VeganDishBuilder } from "./builder/src/classes/vegan-dish-builder";

export class BuilderFacade {
  /*
    Essa é a fachada para a pasta Builder "builder/src/index.ts" dos estudos anteriores...
    */

  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBeverage();
    console.log(meal2);
  }

  makeMeal3(): void {
    const veganMeal = this.veganDishBuilder.makeMeal().getMeal();
    console.log(veganMeal);
    console.log(veganMeal.getPrice());
  }
}
