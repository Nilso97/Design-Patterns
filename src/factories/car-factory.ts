import { Car } from "../vehicle/car";
import { IVehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): IVehicle {
    return new Car(vehicleName);
  }
}
