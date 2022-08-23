import { CarFactory } from "../factories/car-factory";
import { IVehicle } from "../vehicle/vehicle";
import { BicycleFactory } from "../factories/bicycle-factory";
import { randomNumbers } from "../utils/random-numbers";

export function randomCarAlgorithm(): IVehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Onix");
  const bicycle = bicycleFactory.getVehicle("BMX");

  const cars = [car1, car2, bicycle];

  return cars[randomNumbers(cars.length)];
}
