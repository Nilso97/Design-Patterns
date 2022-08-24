import { ICustomer } from "../customer/customer";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { EnterpriseCar } from "../vehicle/enterprise-car";
import { IVehicleProtocol } from "../vehicle/vehicle-protocol";

// Abstract Factory
export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): ICustomer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): IVehicleProtocol {
    const customer = this.createCustomer(customerName);

    return new EnterpriseCar(vehicleName, customer);
  }
}
