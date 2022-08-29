"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControlWithVolume = void 0;
const remote_control_1 = require("./remote-control");
class RemoteControlWithVolume extends remote_control_1.RemoteControl {
    volumeUp() {
        const previousVolume = this.device.getVolume();
        this.device.setVolume(this.device.getVolume() + 10);
        console.log(`${this.device.getName()} tinha o volume ${previousVolume} e agora tem ${this.device.getVolume()}`);
    }
    volumeDown() {
        const previousVolume = this.device.getVolume();
        this.device.setVolume(this.device.getVolume() - 10);
        console.log(`${this.device.getName()} tinha o volume ${previousVolume} e agora tem ${this.device.getVolume()}`);
    }
}
exports.RemoteControlWithVolume = RemoteControlWithVolume;
