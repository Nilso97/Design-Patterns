import { Bicycle } from "../vehicle/bicycle";
import { IVehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): IVehicle {
    return new Bicycle(vehicleName);
  }
}
