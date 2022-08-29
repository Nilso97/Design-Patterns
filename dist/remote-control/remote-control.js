"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
// Abstração
class RemoteControl {
    constructor(device) {
        this.device = device;
    }
    togglePower() {
        this.device.setPower(!this.device.getPower());
        console.log(`${this.device.getName()} power status: ${this.device.getPower()}`);
    }
}
exports.RemoteControl = RemoteControl;
