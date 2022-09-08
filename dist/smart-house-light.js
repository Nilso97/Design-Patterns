"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHouseLight = void 0;
class SmartHouseLight {
    constructor(name) {
        this.name = name;
        this.isOn = false;
        this.intensity = 50;
    }
    getPowerStatus() {
        return this.isOn ? "ON" : "OFF";
    }
    on() {
        this.isOn = true;
        console.log(`${this.name} agora está ${this.getPowerStatus()}`);
        return this.isOn;
    }
    off() {
        this.isOn = false;
        console.log(`${this.name} agora está ${this.getPowerStatus()}`);
        return this.isOn;
    }
    increaseIntensity() {
        if (this.intensity >= 100)
            return this.intensity;
        this.intensity += 1;
        return this.intensity;
    }
    decreaseIntensity() {
        if (this.intensity <= 0)
            return this.intensity;
        this.intensity -= 1;
        return this.intensity;
    }
}
exports.SmartHouseLight = SmartHouseLight;
