"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientCode = void 0;
const radio_1 = require("./device/radio");
const tv_1 = require("./device/tv");
const remote_control_1 = require("./remote-control/remote-control");
const remote_controll_with_volume_1 = require("./remote-control/remote-controll-with-volume");
function clientCode(abstraction) {
    abstraction.togglePower(); // true
    // Type Guard
    if (!("volumeUp" in abstraction))
        return;
    abstraction.volumeUp(); // + ===> 20
    abstraction.volumeUp(); // + ===> 30
    abstraction.volumeDown(); // - ===> 20 ...
}
exports.clientCode = clientCode;
const tv = new tv_1.Tv();
const radio = new radio_1.Radio();
const radioRemoteControl = new remote_control_1.RemoteControl(radio);
const radioRemoteControlWithVolume = new remote_controll_with_volume_1.RemoteControlWithVolume(radio);
clientCode(radioRemoteControl); // On | Liga
clientCode(radioRemoteControlWithVolume); // Power: On + Volume
clientCode(radioRemoteControl); // Off | Desliga
const tvRemoteControl = new remote_control_1.RemoteControl(tv);
const tvRemoteControlWithVolume = new remote_controll_with_volume_1.RemoteControlWithVolume(tv);
clientCode(tvRemoteControlWithVolume); // Power: On + Volume
clientCode(tvRemoteControl); // Off | Desliga
