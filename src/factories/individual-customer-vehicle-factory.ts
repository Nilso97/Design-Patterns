import { ICustomer } from "../customer/customer";
import { IndividualCustomer } from "../customer/individual-customer";
import { IndividualCar } from "../vehicle/individual-car";
import { IVehicleProtocol } from "../vehicle/vehicle-protocol";

// Abstract Factory
export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): ICustomer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): IVehicleProtocol {
    const customer = this.createCustomer(customerName);

    return new IndividualCar(vehicleName, customer);
  }
}
