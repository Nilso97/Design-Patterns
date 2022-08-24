import { ICustomer } from "../customer/customer";
import { IVehicleProtocol } from "./vehicle-protocol";

export class EnterpriseCar implements IVehicleProtocol {
  constructor(public name: string, private readonly customer: ICustomer) {}

  pickup(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`);
  }
}
