"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightPowerCommand = void 0;
class LightPowerCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
    undo() {
        this.light.off();
    }
}
exports.LightPowerCommand = LightPowerCommand;
