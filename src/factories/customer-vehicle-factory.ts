import { ICustomer } from "../customer/customer";
import { IVehicleProtocol } from "../vehicle/vehicle-protocol";

export interface ICreateVehicleCustomerFactory {
  createCustomer(customerName: string): ICustomer;
  createVehicle(vehicleName: string, customerName: string): IVehicleProtocol;
}
