import { IVehicle } from "./vehicle";

// Concrete Product
export class Car implements IVehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando o ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} parou!`);
  }
}
