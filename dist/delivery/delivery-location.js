"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryLocation = void 0;
class DeliveryLocation {
    constructor(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
    deliver(name, number) {
        console.log("Entrega para %s", name);
        console.log("Em", this.intrinsicState.street, this.intrinsicState.city);
        console.log("Número:", number);
        console.log("###");
    }
}
exports.DeliveryLocation = DeliveryLocation;
