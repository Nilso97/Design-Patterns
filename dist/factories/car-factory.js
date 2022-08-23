"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarFactory = void 0;
const car_1 = require("../vehicle/car");
const vehicle_factory_1 = require("./vehicle-factory");
class CarFactory extends vehicle_factory_1.VehicleFactory {
    getVehicle(vehicleName) {
        return new car_1.Car(vehicleName);
    }
}
exports.CarFactory = CarFactory;
