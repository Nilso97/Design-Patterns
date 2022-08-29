import { IDeviceImplementation } from "../device/device-implementation";

// Abstração
export class RemoteControl {
  constructor(protected device: IDeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`
    );
  }
}
