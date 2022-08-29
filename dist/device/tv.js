"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
class Tv {
    constructor() {
        this.name = "TV";
        this.power = false;
        this.volume = 10;
    }
    getName() {
        return this.name;
    }
    setPower(powerStatus) {
        this.power = powerStatus;
    }
    getPower() {
        return this.power;
    }
    setVolume(volume) {
        if (volume < 0)
            return;
        if (volume > 100)
            return;
        this.volume = volume;
    }
    getVolume() {
        return this.volume;
    }
}
exports.Tv = Tv;
