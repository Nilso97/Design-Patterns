"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFactory = void 0;
class VehicleFactory {
    pickUp(customerName, vehicleName) {
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    }
}
exports.VehicleFactory = VehicleFactory;
