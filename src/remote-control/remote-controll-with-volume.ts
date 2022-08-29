import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const previousVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(
      `${this.device.getName()} tinha o volume ${previousVolume} e agora tem ${this.device.getVolume()}`
    );
  }

  volumeDown(): void {
    const previousVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(
      `${this.device.getName()} tinha o volume ${previousVolume} e agora tem ${this.device.getVolume()}`
    );
  }
}
