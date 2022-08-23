"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_factory_1 = require("./factories/car-factory");
const random_vehicle_algorithm_1 = require("./main/random-vehicle-algorithm");
const random_numbers_1 = require("./utils/random-numbers");
const carFactory = new car_factory_1.CarFactory();
const customerNames = [
    "Ana",
    "Joana",
    "Helena",
    "Cláudio",
    "Carlos",
    "Patrick",
];
for (let i = 0; i < 10; i++) {
    const vehicle = (0, random_vehicle_algorithm_1.randomCarAlgorithm)();
    const name = customerNames[(0, random_numbers_1.randomNumbers)(customerNames.length)];
    vehicle.pickUp(name);
    vehicle.stop();
    const newCar = carFactory.pickUp(name, `NOVO CARRO - ${(0, random_numbers_1.randomNumbers)(100)}`);
    newCar.stop();
    console.log("---");
}
