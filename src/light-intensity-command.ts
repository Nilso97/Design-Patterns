import { ISmartHouseCommand } from "./smart-house-command";
import { SmartHouseLight } from "./smart-house-light";

export class LightIntensityCommand implements ISmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`A intensidade da ${this.light.name} é ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`A intensidade da ${this.light.name} é ${intensity}`);
  }
}
