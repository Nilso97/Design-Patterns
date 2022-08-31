import { IMealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements IMealCompositeProtocol {
  private readonly _children: IMealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: IMealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
