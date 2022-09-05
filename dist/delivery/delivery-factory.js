"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryFactory = void 0;
const delivery_location_1 = require("./delivery-location");
// Factory
class DeliveryFactory {
    constructor() {
        this.locations = {};
    }
    createId(data) {
        return Object.values(data)
            .map((item) => item.replace(/\s+/, "").toLocaleLowerCase())
            .join("_");
    }
    makeLocation(intrinsicState) {
        const key = this.createId(intrinsicState);
        if (key in this.locations)
            return this.locations[key];
        this.locations[key] = new delivery_location_1.DeliveryLocation(intrinsicState);
        return this.locations[key];
    }
    getLocations() {
        return this.locations;
    }
}
exports.DeliveryFactory = DeliveryFactory;
