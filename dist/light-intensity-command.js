"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightIntensityCommand = void 0;
class LightIntensityCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        const intensity = this.light.increaseIntensity();
        console.log(`A intensidade da ${this.light.name} é ${intensity}`);
    }
    undo() {
        const intensity = this.light.decreaseIntensity();
        console.log(`A intensidade da ${this.light.name} é ${intensity}`);
    }
}
exports.LightIntensityCommand = LightIntensityCommand;
